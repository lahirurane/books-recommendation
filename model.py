

from flask import Flask, make_response
from json import dumps
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction import DictVectorizer
import numpy as np
import pandas as pd
from scipy import sparse
import sklearn.metrics.pairwise as pw
import json
import os


def getRecommendationForBookID(id, limit):

    limit = limit * -1
    bookDF = pd.read_csv('./data/books.csv')
    bookDF = bookDF.drop(['image_url', 'small_image_url',
                          'title', 'isbn', 'isbn13'], axis=1)

    if (os.path.exists('./similarityMatrix.npy') == False or os.path.exists('./reverseIndexMap.json') == False):

        ratingsDF = pd.read_csv('./data/ratings.csv')
        books_tagsDF = pd.read_csv('./data/book_tags.csv')
        tagsDF = pd.read_csv('./data/tags.csv')

        listOfDictonaries = []
        reverseIndexMap = {}
        indexMap = {}

        ptr = 0
        testdf = ratingsDF
        testdf = testdf[['user_id', 'rating']].groupby(testdf['book_id'])
        for groupKey in testdf.groups.keys():
            tempDict = {}

            groupDF = testdf.get_group(groupKey)
            for i in range(0, len(groupDF)):
                tempDict[groupDF.iloc[i, 0]] = groupDF.iloc[i, 1]
            indexMap[ptr] = groupKey
            reverseIndexMap[groupKey] = ptr
            ptr = ptr+1
            listOfDictonaries.append(tempDict)

        dictVectorizer = DictVectorizer(sparse=True)
        vector = dictVectorizer.fit_transform(listOfDictonaries)

        pairwiseSimilarity = cosine_similarity(vector)
        np.save('./similarityMatrix', pairwiseSimilarity)

        json.dump(reverseIndexMap, open("reverseIndexMap.json", 'w'))
        reverseIndexMap = json.load(open("reverseIndexMap.json"))

    else:
        pairwiseSimilarity = np.load('similarityMatrix.npy')
        reverseIndexMap = json.load(open("reverseIndexMap.json"))

    def getTopRecommandations(bookID, limit):
        row = reverseIndexMap[str(bookID)]
        return np.argsort(pairwiseSimilarity[row])[limit:][::-1]

    return getTopRecommandations(id, limit).tolist()


app = Flask(__name__)


@app.route('/getRecom/<bookid>/<limit>')
def getRecom(bookid=None, limit=None):
    results = getRecommendationForBookID(bookid, int(limit))
    print("results", dumps(results))
    return make_response(dumps(results))


if __name__ == '__main__':
    app.run()

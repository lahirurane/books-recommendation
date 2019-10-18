const express = require('express');
const router = express.Router();
const request = require('request-promise');

// Load User model
const Book = require('../../models/Book');
const Purchase = require('../../models/Purchase');
const Rating = require('../../models/Rating');

// @route   GET api/books/getBooksForID
// @desc    getBooks Details for ID
// @access  Public
router.get('/getBooksForID/:id', (req, res) => {
  const id = req.params.id;

  Book.find({ data_id: id }).then(data => {
    Purchase.find({ data_id: data[0]._id }).then(purchases => {
      let isBought = false;

      if (purchases && purchases.length > 0) {
        isBought = true;
      }
      Rating.find({ data_id: id, user_id: 1 }).then(ratings => {
        let rating = 0;
        if (ratings && ratings.length > 0) {
          rating = ratings[0].rating;
        }
        res.json({ isSuccess: true, data: data, isBought: isBought, rating: rating });
      });
    });
  });
});

// @route   GET api/books/getPopular
// @desc    getBooks popular
// @access  Public
router.get('/getPopularItems', (req, res) => {
  getPopularBookIds().then(async data => {
    Book.find({ data_id: { $in: data } })
      .then(result => {
        indexMap = [];
        data.map(rid => {
          let ridIndex = result.map(e => e.data_id).indexOf(rid);
          if (result[ridIndex]) {
            indexMap.push(result[ridIndex]);
          } else {
            console.log('weird', ridIndex);
          }
        });

        res.status(200).json({ isSuccess: true, data: indexMap });
      })
      .catch(e => {
        res.status(400).json({ isSuccess: false, message: e });
      });
  });
});

// @route   GET api/books/getRecomUser
// @desc    Get Recommendation for user
// @access  Public
router.get('/getRecomUser/:user', (req, res) => {
  const user = req.params.user;

  //Get user's books
  getUsersBooks(user).then(async data => {
    let recommendationIds = [];
    for (let i = 0; i < data.length; i++) {
      let recForBook = await getRecommendationsForID(data[i], 5);

      recForBook.forEach(item => {
        recommendationIds.push(item);
      });
    }

    //remove purchase and rated items
    recommendationIds = recommendationIds.filter(function(v) {
      return this.indexOf(v) < 0;
    }, data);

    Book.find({ data_id: { $in: recommendationIds } })
      .then(result => {
        indexMap = [];
        recommendationIds.map(rid => {
          let ridIndex = result.map(e => e.data_id).indexOf(rid);
          if (result[ridIndex]) {
            indexMap.push(result[ridIndex]);
          } else {
            console.log('weird', ridIndex);
          }
        });

        res.status(200).json({ isSuccess: true, data: indexMap });
      })
      .catch(e => {
        res.status(400).json({ isSuccess: false, message: e });
      });
  });
});

// @route   GET api/books/getRecomBook
// @desc    Tests users route
// @access  Public
router.get('/getRecomBook/:id', (req, res) => {
  const id = Number(req.params.id);

  if (id && !isNaN(id)) {
    getRecommendationsForID(id, 50)
      .then(parseRecoms => {
        Book.find({ data_id: { $in: parseRecoms } }).then(data => {
          indexMap = [];
          parseRecoms.map(rid => {
            let ridIndex = data.map(e => e.data_id).indexOf(rid);
            if (data[ridIndex]) {
              indexMap.push(data[ridIndex]);
            } else {
              console.log('weird', ridIndex);
            }
          });

          //remove purchase and rated items
          indexMap = indexMap.filter(function(v) {
            return v.data_id !== id;
          });
          res.json({ isSuccess: true, data: indexMap });
        });
      })
      .catch(err => {
        console.log('Error in getting book recommendations', err);
        res.status(400).json({ isSuccess: false, data: [] });
      });
  } else {
    res.status(400).json({ isSuccess: false });
  }
});

// @route   GET api/books/getCategolue
// @desc    get Book Catalogue
// @access  Public
router.get('/getCategolue/:skip/:limit', (req, res) => {
  const skip = req.params.skip;
  const limit = req.params.limit;
  Book.find({})
    .skip(Number(skip))
    .limit(Number(limit))
    .sort({ book_id: 1 })
    .then(data => {
      let hasMore = true;
      if (skip > 0 && data.length == 0) {
        hasMore = false;
      }

      res.status(200).json({ isSuccess: true, data: data, hasMore: hasMore });
    });
});

// @route   GET api/books/getCategolue
// @desc    get Book Catalogue
// @access  Public
router.get('/setRating/:bookid/:userid/:rating', (req, res) => {
  const bookid = req.params.bookid;
  const userid = req.params.userid;
  const rating = req.params.rating;

  let ratingObj = new Rating({
    data_id: Number(bookid),
    user_id: Number(userid),
    rating: Number(rating)
  });
  ratingObj
    .save()
    .then(data => {
      res.status(200).json({ isSuccess: true });
    })
    .catch(e => {
      console.log('Error in saving rating', e);
      res.status(400).json({ isSuccess: false, e });
    });
});

function getRecommendationsForID(id, limit) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      uri: 'http://127.0.0.1:5000/getRecom/' + id + '/' + limit
    };

    request(requestOptions)
      .then(recoms => {
        const parseRecoms = JSON.parse(recoms);

        resolve(parseRecoms);
      })
      .catch(e => {
        reject();
      });
  });
}

function getPopularBookIds() {
  return new Promise((resolve, reject) => {
    Purchase.aggregate([
      {
        $group: {
          _id: { data_id: '$data_id' },
          book_count: { $sum: 1 }
        }
      },

      {
        $lookup: {
          from: 'books',
          localField: '_id.data_id',
          foreignField: '_id',
          as: 'book_details'
        }
      },

      { $unwind: '$book_details' },
      { $sort: { book_count: -1 } },
      {
        $project: {
          _id: 0,
          book_id: '$book_details.data_id',
          book_count: '$book_count'
        }
      }
    ]).then(data1 => {
      Rating.aggregate([
        {
          $group: {
            _id: { data_id: '$data_id' },
            rating_count: { $sum: '$rating' }
          }
        },
        { $sort: { rating_count: -1 } },
        { $limit: 50 }
      ]).then(data2 => {
        let result = [];
        data1.map(item => {
          result.push(item.book_id);
        });

        data2.map(item => {
          result.push(item._id.data_id);
        });
        resolve(result);
      });
    });
  });
}

function getUsersBooks(userid) {
  return new Promise((resolve, reject) => {
    Purchase.aggregate([
      {
        $match: {
          user_id: Number(userid)
        }
      },
      {
        $group: {
          _id: { data_id: '$data_id' },
          book_count: { $sum: 1 }
        }
      },

      {
        $lookup: {
          from: 'books',
          localField: '_id.data_id',
          foreignField: '_id',
          as: 'book_details'
        }
      },

      { $unwind: '$book_details' },
      { $sort: { book_count: -1 } },
      {
        $project: {
          _id: 0,
          book_id: '$book_details.data_id',
          book_count: '$book_count'
        }
      }
    ]).then(data1 => {
      Rating.aggregate([
        {
          $match: {
            user_id: Number(userid)
          }
        },
        {
          $group: {
            _id: { data_id: '$data_id' },
            rating_count: { $sum: '$rating' }
          }
        },
        { $sort: { rating_count: -1 } },
        { $limit: 50 }
      ]).then(data2 => {
        let result = [];
        data1.map(item => {
          result.push(item.book_id);
        });

        data2.map(item => {
          result.push(item._id.data_id);
        });
        resolve(result);
      });
    });
  });
}

module.exports = router;

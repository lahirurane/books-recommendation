const csv = require('csvtojson');
const Rating = require('../../models/Rating');
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;

//Reading the csv file and mapping film categories
const UploadRating = async resolve => {
  let fileInput = '../../data/ratings.csv';
  let result = [];
  csv()
    .fromFile(fileInput)
    .then(async ratings => {
      try {
        for (const rate of ratings) {

            if((Number(rate.user_id ) < 10)){
 result.push({
            data_id: rate.book_id,
            user_id: rate.user_id,
           rating:Number(rate.rating)
          });
            }
         
        }
        Rating.insertMany(result)
          .then(data => {
            console.log('Ratings inserted successfully');
          })
          .catch(e => {
            console.log('Error in uploading data', e);
          });
      } catch (e) {
        console.log('Error in formatting data', e);
      }
    })
    .catch(e => {
      console.log('Error in getting data', e);
    });
};

mongoose
  .connect(db)
  .then(async () => {
    console.log('MongoDB connected');
    // await UploadRating();
    Rating.remove({})
      .then(async data => {
        console.log('Rating Collection Cleared');
      })
      .then(async data => {
        await UploadRating();
      });
  })
  .catch(err => console.log(err));

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RatingSchema = new Schema({
  data_id: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  
});

module.exports = Rating = mongoose.model('ratings', RatingSchema);

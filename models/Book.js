const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  data_id: {
    type: Number,
    required: true
  },
  book_id: {
    type: Number,
    required: true
  },
  isbn: {
    type: String
  },
  authors: {
    type: String
  },
  original_publication_year: {
    type: String
  },
  original_title: {
    type: String
  },
  title: {
    type: String
  },
  language_code: {
    type: String
  },
  image_url: {
    type: String
  },
  small_image_url: {
    type: String
  }
});

module.exports = Book = mongoose.model('books', BookSchema);

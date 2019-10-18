const csv = require('csvtojson');
const Book = require('../../models/Book');
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;

//Reading the csv file and mapping film categories
const UploadBooks = async resolve => {
  let fileInput = '../../data/books.csv';
  let result = [];
  csv()
    .fromFile(fileInput)
    .then(async books => {
      try {
        for (const book of books) {
          result.push({
            data_id: book.id,
            book_id: book.book_id,
            isbn: book.isbn,
            authors: book.authors,
            original_publication_year: book.original_publication_year,
            original_title: book.original_title,
            title: book.title,
            language_code: book.language_code,
            image_url: book.image_url,
            small_image_url: book.small_image_url
          });
        }
        Book.insertMany(result)
          .then(data => {
            console.log('Books inserted successfully');
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
    Book.remove({})
      .then(async data => {
        console.log('Book Collection Cleared');
      })
      .then(async data => {
        await UploadBooks();
      });
  })
  .catch(err => console.log(err));

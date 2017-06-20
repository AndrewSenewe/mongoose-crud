const mongoose = require('mongoose'),
      Schema = mongoose.Schema


var bookSchema = new Schema({
  title : String,
  isbn : String,
  author : String,
  category : String,
  stock : String
});

let Book = mongoose.model('Book', bookSchema)

module.exports = Book;
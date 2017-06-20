'use strict'
const book = require('../models/book');
var ObjectId = require('mongodb').ObjectID;

let findAllBook = (req, res) => {
  book.find({}, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

let createBook = (req, res) => {
  book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send('data inserted')
  })
}

let updateBook = (req, res) => {
  let body = req.body
  book.findOne({
    _id: ObjectId(req.params.id)
  }, (err, data) => {
    if (data) {
      book.update({
        _id: ObjectId(req.params.id)
      }, {
        $set: {
          title : body.title || data.title,
          isbn : body.isbn || data.isbn,
          author : body.author || data.author,
          category : body.category || data.category,
          stock : body.stock || data.stock
        }
      }, (err, data) => {
        if (err) {
          res.send(err)
        }
        res.send('data edited')
      })
    }
    else {
      res.send('no data available to edit')
    }
  })
}

let deleteBook = (req, res) => {
  book.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {findAllBook,createBook,updateBook,deleteBook};
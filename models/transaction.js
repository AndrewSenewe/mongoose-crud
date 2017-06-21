const mongoose = require('mongoose')
var Schema = mongoose.Schema


var transactionSchema = new Schema({
  memberid : String,
  days : [{
    type : Schema.Types.ObjectId,
    ref: 'Costumer'
  }],
  out_date : Date,
  due_date : Date,
  in_date : Date,
  fine : Number,
  booklist:  [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
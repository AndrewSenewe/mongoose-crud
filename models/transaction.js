const mongoose = require('mongoose'),
      Schema = mongoose.Schema


var transactionSchema = new Schema({
  memberid : String,
  days : {
    type : String,
    ref: 'Costumer'
  },
  out_date : String,
  due_date : String,
  in_date : String,
  fine : Number,
  bookList: [{type: Schema.Types.ObjectId, ref:'Book'}]
});

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
const transaction = require('../models/transaction');
var ObjectId = require('mongodb').ObjectID;

let findAllTransactions = (req, res) => {
  transaction.find({})
  .populate('booklist')
  .populate({path: 'memberid', select: 'name'})
  .exec(function (err, data) {
    if (err) res.send(err);
    // console.log('The creator is %s', story._creator.name);
    // prints "The creator is Aaron"
    res.send(data)
  })
}

let createTransaction = (req, res) => {
  let body = req.body
  transaction.create({
    days: body.days,
    memberid: body.memberid,
    out_date: new Date(body.out_date),
    in_date: new Date(body.in_date),
    due_date: new Date(body.due_date),
    booklist: body.booklist,
    fine: body.fine
  }, (err) => {
    if (err) {
      res.send(err)
    }
    console.log(body.booklist);
    res.send('data created!')
  })
}

let updateTransaction = (req, res) => {
  let body = req.body
  transaction.findOne({
    _id: ObjectId(req.params.id)
  }, (err, data) => {
    if (err) {
      res.send(err)
    } else if (data) {
      transaction.update({
        days: body.days || data.days,
        memberid: body.memberid || data.memberid,
        out_date: new Date(body.out_date) || data.out_date,
        in_date: new Date(body.in_date)|| data.in_date,
        due_date: new Date(body.due_date) || data.due_date,
        fine: body.fine || data.fine,
        booklist: body.booklist || data.booklist
      }, (err) => {
        if (err) {
          res.send(err)
        }
        res.send('data updated')
      })
    } else {
      res.send('nothing to be edited')
    }
  })
}

let deleteTransaction = () => {
  let body = req.body
  transaction.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {findAllTransactions, createTransaction, updateTransaction, deleteTransaction};

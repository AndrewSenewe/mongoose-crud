const costumer = require('../models/costumer');
var ObjectId = require('mongodb').ObjectID;

let findAllCostumers = (req, res) => {
  costumer.find({}, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

let createCostumer = (req, res) => {
  let body = req.body
  costumer.create({
    name: body.name,
    memberid: body.memberid,
    address: body.address,
    zipcode: body.zipcode,
    phone: body.phone
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data created!')
  })
}

let updateCostumer = (req, res) => {
  let body = req.body
  costumer.findOne({
    _id: ObjectId(req.params.id)
  }, (err, data) => {
    if (err) {
      res.send(err)
    } else if (data) {
      costumer.update({
        name: body.name || data.name,
        memberid: body.memberid || data.memberid,
        address: body.address || data.address,
        zipcode: body.zipcode || data.zipcode,
        phone: body.phone || data.phone
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

let deleteCostumer = () => {
  let body = req.body
  costumer.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {findAllCostumers, createCostumer, updateCostumer, deleteCostumer};

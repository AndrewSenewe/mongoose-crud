const mongoose = require('mongoose'),
      Schema = mongoose.Schema

// validations


var costumerSchema = new Schema({
  name : {
    type: String,
    required: [true, 'at least you have a name right?']
  },
  memberid : {
    type: String,
    required: [true, 'you have to have a member id']
  },
  address : String,
  zipcode : String,
  phone : {
    type: String
  }
});

let Costumer = mongoose.model('Costumer', costumerSchema)



module.exports = Costumer;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thirdyearSchema = new Schema({
  name: {
    type: String,
    required: true,

  },
  usn: {
    type: String,
    required: true,
  },
  father:{
    type:String,
    required:true,
  },
  dob:{
    type:String,
    required:true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,

  },
  branch: {
    type: String,
    required: true,
  },
  email:{
      type:String,
  },
  year:{
    type:String,
    required:true,
  }

});

const thirdyear = mongoose.model('ThirdYear',thirdyearSchema );
module.exports = thirdyear;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
  name: {
    type: String,
    required: true,

  },
  branch: {
    type: String, 
    required: true,
  },
  post: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true,
    unique:true
  }

});

const Faculty = mongoose.model('faculty',FacultySchema );
module.exports = Faculty;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const secondcourseSchema = new Schema({
  subcode: {
    type: String,
    required: true,
  },
  sem: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  sec: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  scheme: {
    type: Number,
    required: true,
  },
  subname: {
    type: String,
    required: true,
  },
  handled:{
    type:String,
    required:true,
  }
});

const secondcourse = mongoose.model("SecondCourse", secondcourseSchema);
module.exports = secondcourse;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thirdcourseSchema = new Schema({
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

const thirdcourse = mongoose.model("ThirdCourse", thirdcourseSchema);
module.exports = thirdcourse;

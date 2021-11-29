const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecondMarkSchema = new Schema({
  usn: {
    type: String,
    required: true,
  },
  subname: {
    type: String,
    required: true,
  },
  sec: {
    type: String,
    required: true,
  },


  sem: {
    type: Number,
    required: true,
  },
  subcode: {
    type: String,
    required: true,
  },
  firstia: {
    type: Number,
    required: true,
  },
  secondia: {
    type: Number,
    required: true,
  },
  thirdia: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});
const SecondMark = mongoose.model("secondmark", SecondMarkSchema);
module.exports = SecondMark;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentLoginSchema = new Schema({
  usn: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});
const StudentLogin = mongoose.model("StudentLogin", StudentLoginSchema);
module.exports = StudentLogin;

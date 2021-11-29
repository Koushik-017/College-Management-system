const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const viewSchema = new Schema(
  {
    year: {
      type: String,
      required: true,
    },
    


}
);

const view = mongoose.model("view", viewSchema);
module.exports = view;

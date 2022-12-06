const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true
    },
    question: {
      type: String,
      required: true,
      trim: true
    },
  {
    _id: false
  }
);

module.exports = model("cardddddd", schema);
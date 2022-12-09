const { Schema, model } = require("mongoose");

const schema = new Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = { Card: model("card", schema) };

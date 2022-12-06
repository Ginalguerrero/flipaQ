const { Schema, model } = require("mongoose");

const {schema: cardSchema} =  require("./Card.js")

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
      minLength: 50
    },
    
    cards: [cardSchema]
  },
  {
    _id: false
  }
);

module.exports = model("deck", schema);
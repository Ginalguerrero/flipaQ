const { Schema, model } = require("mongoose");

const { schema: cardSchema } = require("./Card.js");

const schema = new Schema({
  name: {
    type: String,
    required: [true, "Deck name must be unique"],
    unique: true,
    trim: true,
    minLength: [3, "Deck name is too short (min: 3 characters)"],
    minLength: [50, "Deck name is too long (max: 50 characters)"],
  },

  cards: [cardSchema],
});

module.exports = model("deck", schema);

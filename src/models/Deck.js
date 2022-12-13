const { Schema, model } = require("mongoose");

const { ObjectId } = Schema.Types;

const schema = new Schema({
  name: {
    type: String,
    required: [true, "Deck name must be unique"],
    unique: true,
    trim: true,
    minlength: [3, "Deck name is too short (min: 3 characters)"],
    maxlength: [50, "Deck name is too long (max: 50 characters)"],
  },

  cards: [{ ref: "card", type: ObjectId }],
});

module.exports = { Deck: model("deck", schema) };

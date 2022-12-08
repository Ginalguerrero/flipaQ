const { Schema, model } = require("mongoose");

const { ObjectId } = Schema.Types;

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  decks: [{ ref: "deck", type: ObjectId }],
});

module.exports = { User: model("user", schema) };

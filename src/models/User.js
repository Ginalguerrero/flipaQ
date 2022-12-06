const { Schema, model } = require("mongoose");

const { ObjectId } = Schema.Types;

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password:{
      type: String,
      required: True,
      minLength: 4
    },
    decks: [{ ref: "deck", type: ObjectId }]
  },
  {
    _id: false
  }
);

module.exports = model("user", schema);
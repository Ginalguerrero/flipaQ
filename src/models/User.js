const { Schema, model } = require("mongoose");

const { ObjectId } = Schema.Types;

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
    
    cards: [{ ref: "card", type: ObjectId }]
  },
  {
    _id: false
  }
);

module.exports = model("deck", schema);
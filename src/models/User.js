const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const { ObjectId } = Schema.Types;

const schema = new Schema({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
    minlength: [4, "Password should have at least 4 caracters"],
    decks: [{ ref: "deck", type: ObjectId }],
  },
});

schema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 15);
  next();
});

module.exports = { User: model("user", schema) };

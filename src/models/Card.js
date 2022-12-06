const { Schema,  Types } = require("mongoose");

const schema = new Schema(
  {
    cardId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
  },
  {
    _id: false,
  }
);

module.exports = model("card", schema);

const { Deck } = require("../models/Deck.js");
const { User } = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");
const { Types } = require("mongoose");
// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes

const getDecks = async (req, res) => {
  console.log(res.locals.userId);
  try {
    const userDecks = await User.find({ _id: res.locals.userId }).select({
      decks: 1,
      _id: 0,
    });
    const decks = await Decks.find({ $in: userDecks.map(Types.ObjectId) });
    req.status(StatusCodes.OK).send({ decks });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not get create decks" });
  }
};

const getCards = async (req, res) => {};

const getCard = async (req, res) => {};

const createDeck = async (req, res) => {
  try {
    const deck = await Deck.create({ ...req.body });

    const updatedUser = await User.findOneAndUpdate(
      { _id: Types.ObjectId(res.locals.userId) },
      { $push: { decks: deck._id } },
      { new: true }
    );

    res.status(StatusCodes.CREATED).send({ message: "Deck created" });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could not create deck" });
  }
};

const createCard = async (req, res) => {};

module.exports = { getDecks, getCards, getCard, createDeck, createCard };

const { Deck } = require("../models/Deck.js");
const { User } = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");
const { Types } = require("mongoose");
// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes

const getDecks = async (req, res) => {
  try {
    const userDecks = await User.findOne({ _id: res.locals.userId }).populate(
      "decks"
    );
    const { decks } = userDecks;
    res.status(StatusCodes.OK).send({ decks });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could not get list decks", error: err });
  }
};

const getCards = async (req, res) => {};

const getCard = async (req, res) => {};

const createDeck = async (req, res) => {
  try {
    const deck = await Deck.create(req.body);
    await User.findOneAndUpdate(
      { _id: res.locals.userId },
      { $addToSet: { decks: deck._id } },
      { new: true }
    );

    res.status(StatusCodes.CREATED).send({ message: "Deck created" });
  } catch (err) {
    console.log({ err });
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could not create deck", error: err });
  }
};

const createCard = async (req, res) => {};

module.exports = { getDecks, getCards, getCard, createDeck, createCard };

const { Deck } = require("../models/Deck.js");
const { User } = require("../models/User.js");
const { Card } = require("../models/Card.js");
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

const getCards = async (req, res) => {
  const { deckId } = req.params;
  try {
    const userDecks = await User.findOne({ _id: res.locals.userId }).populate(
      "decks"
    );
    const deckIds = userDecks.decks.map((deck) => deck._id.toString());
    console.log(deckIds.includes(deckId));
    if (!deckIds.includes(deckId))
      return res
        .status(StatusCodes.FORBIDDEN)
        .send({ message: "This deck is not yours" });
    const deckCards = await Deck.findOne({ _id: deckId }).populate("cards");
    const { cards } = deckCards;
    res.status(StatusCodes.OK).send({ cards });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could not get list cards", error: err });
  }
};

const createDeck = async (req, res) => {
  try {
    const deck = await Deck.create(req.body);
    await User.findOneAndUpdate(
      { _id: res.locals.userId },
      { $addToSet: { decks: deck._id } },
      { new: true }
    );

    res
      .status(StatusCodes.CREATED)
      .send({ message: "Deck created", deckId: deck._id });
  } catch (err) {
    console.log({ err });
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could not create deck", error: err });
  }
};

const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    await Deck.findOneAndUpdate(
      { _id: req.params.deckId },
      { $addToSet: { cards: card._id } },
      { new: true }
    );

    res
      .status(StatusCodes.CREATED)
      .send({ message: "Card created", cardId: card._id });
  } catch (err) {
    console.log({ err });
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could not create card", error: err });
  }
};

module.exports = { getDecks, getCards, createDeck, createCard };

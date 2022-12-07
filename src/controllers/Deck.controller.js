const { Deck } = require("../models");
const { StatusCodes } = require("http-status-codes");

// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes

const getDecks = (req, res) => {};

const getCards = (req, res) => {};

const getCard = (req, res) => {};

const createDeck = (req, res) => {};

const createCard = (req, res) => {};

module.exports = { getDecks, getCards, getCard, createDeck, createCard };

const router = require("express").Router();
const deckController = require("../controllers/Deck.controller");

router.get("/decks", deckController.getDecks);
router.get("/decks/:deckId", deckController.getCards);
router.get("/decks/:deckId/:cardId", deckController.getCard);

router.post("/decks", deckController.createDeck);
router.post("/decks/:deckId", deckController.createCard);

module.exports = { router };

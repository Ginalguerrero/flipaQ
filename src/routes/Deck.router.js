const router = require("express").Router()
const deckController = require("../controllers/deck.controllers")

router.get("/decks", deckController.getDecks);
router.get("/decks/:deckId", deckController.getCards);
router.get("/decks/:deckId/:cardId", deckController.getCards);

router.post("/decks", deckController.createDeck);
router.post("/decks/:deckId", deckController.createCard);
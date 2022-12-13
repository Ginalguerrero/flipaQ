const router = require("express").Router();
const deckController = require("../controllers/Deck.controller");

const { requireAuth } = require("../controllers/middlewares/auth.middleware");

router.use(requireAuth);
router.get("/decks", deckController.getDecks);
router.get("/decks/:deckId", deckController.getCards);

router.post("/decks", deckController.createDeck);
router.post("/decks/:deckId", deckController.createCard);

module.exports = { router };

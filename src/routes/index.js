const router = require("express").Router();
const { router: userRoutes } = require("./User.router");
const { router: deckRoutes } = require("./Deck.router");

router.use(userRoutes);
router.use(deckRoutes);

module.exports = router;

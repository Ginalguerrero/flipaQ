const router = require("express").Router();
const { router: userRoutes } = require("./User.router");
const { router: deckRoutes } = require("./Deck.router");

router.use("/api", userRoutes);
router.use("/api", deckRoutes);

module.exports = router;
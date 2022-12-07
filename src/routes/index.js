const router = require("express").Router();
const { router: userRoutes } = require("./user.routes");
const { router: deckRoutes } = require(".deck.routes");

router.use(userRoutes);
router.use(deckRoutes);

module.exports = router;

const router = require('express').Router();
const userRoutes = require('./user.routes');
const deckRoutes = require('.deck.routes')

router.use(userRoutes);
router.use(deckRoutes)

module.exports = router;
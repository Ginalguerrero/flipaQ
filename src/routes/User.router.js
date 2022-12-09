const router = require("express").Router();
const userController = require("../controllers/User.controller");
const { requireAuth } = require("../controllers/middlewares/auth.middleware");
router.post("/signup", userController.signup);

router.post("/login", userController.login);
router.post("/logout", requireAuth, userController.logout);

module.exports = { router };

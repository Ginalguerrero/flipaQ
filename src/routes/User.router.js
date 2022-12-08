const router = require("express").Router();
const hasUser = require("../controllers/middlewares/auth.middleware");
const userController = require("../controllers/User.controller");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", hasUser, userController.logout);

module.exports = { router };

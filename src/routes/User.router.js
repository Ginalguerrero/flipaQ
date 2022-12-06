const router = require("express").Router()
const userController = require("../controllers/user.controllers")

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
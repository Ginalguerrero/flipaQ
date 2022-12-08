const { User } = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes
const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({
      username,
      password: bcrypt.hashSync(password, 15),
    });
    res
      .status(StatusCodes.CREATED)
      .send({
        message: "User created.",
        user: { username: user.username, _id: user._id },
      });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Could NOT create user." });
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { signup, login, logout };

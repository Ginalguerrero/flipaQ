const { User } = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes
const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).send({ message: "User created." });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Could NOT create user.", error: error.message });
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { signup, login, logout };

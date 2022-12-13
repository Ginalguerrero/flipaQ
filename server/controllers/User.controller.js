const { User } = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");

const createToken = require("../helpers/jwt");
// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes
const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 604800 });
    res
      .status(StatusCodes.CREATED)
      .send({ message: "User created.", user: user._id });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Could NOT create user.", error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 604800 });
    res
      .status(StatusCodes.ACCEPTED)
      .json({ message: "User logged in.", user: user._id });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not log you in" });
  }
};

const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(StatusCodes.OK).send({ message: "User logged out successfully" });
};

module.exports = { signup, login, logout };

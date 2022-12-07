const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");

// Use StatusCodes.NOT_FOUND instead of like 404
// For more info https://www.npmjs.com/package/http-status-codes
const signup = (req, res) => {};

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { signup, login, logout };

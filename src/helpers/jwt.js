const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (id) =>
  jwt.sign({ id }, process.env.TOKEN, { expiresIn: "7d" });

module.exports = createToken;

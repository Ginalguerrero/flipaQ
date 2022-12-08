const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (id) =>
  jwt.sign({ id }, process.env.TOKEN, {
    noTimestamp: true,
    expiresIn: "7d",
  });

module.exports = createToken;

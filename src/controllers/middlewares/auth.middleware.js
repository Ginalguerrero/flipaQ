const { StatusCodes } = require("http-status-codes");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN, (err, decodedToken) => {
      if (!err) {
        res.locals.userId = decodedToken.id;
        next();
      } else {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ message: "You shouldn't be here" });
      }
    });
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message: "You shouldn't be here" });
  }
};

module.exports = { requireAuth };

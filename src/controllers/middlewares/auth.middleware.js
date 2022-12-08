const { StatusCodes } = require("http-status-codes");

const hasUser = (req, res, next) => {
  const userId = req.headers.user;
  if (!userId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "User is not connected" });
  } else {
    next();
  }
};

module.exports = hasUser;

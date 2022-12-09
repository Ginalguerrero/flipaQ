const mongoose = require("mongoose");

require("dotenv").config();

const { connect, connection } = mongoose;
mongoose.set("strictQuery", true);

const connectionString = process.env.CONN;

console.log(connectionString);
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

const mongoose = require("mongoose");

require("dotenv").config();

const { connect, connection } = mongoose;
mongoose.set("strictQuery", true);

const connectionString = process.env.MONGO_URI;

console.log(connectionString);
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

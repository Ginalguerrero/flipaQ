const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./config/conn.js");
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
const { urlencoded, json } = express;
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(routes);

db.once("open", () =>
  app.listen(PORT, () => console.log(`Running at port: ${PORT}!`))
);

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const mainRouter = require("./src/routes");
const { connection } = require("./db-connection");

app.use(cors());
app.use(express.json());

app.use("/images", express.static("public/pictures"));

app.use("/api", mainRouter);

const server = app.listen(process.env.PORT || 8000, (err) => {
  if (err) return console.log(err.message);
  console.log(`Connexion succeded at PORT: http://localhost:${process.env.PORT || 8000}`);
  return connection.connect((err) => {
    if (err) return console.log(err.message);
    return console.log(`DB connexion ok`);
  });
});

module.exports = server;

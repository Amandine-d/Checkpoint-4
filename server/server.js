require("dotenv").config();
const express = require("express");

const app = express();
const mainRouter = require("./src/routes");
const { connection } = require("./db-connection");

app.use(express.json());
app.use("/api", mainRouter);

const server = app.listen(process.env.PORT || 8000, (err) => {
  // eslint-disable-next-line no-console
  if (err) return console.log(err.message);
  // eslint-disable-next-line no-console
  console.log(`Connexion succeded at PORT: http://localhost:${process.env.PORT || 8000}`);
  return connection.connect((err) => {
    // eslint-disable-next-line no-console
    if (err) return console.log(err.message);
    // eslint-disable-next-line no-console
    return console.log(`DB connexion ok`);
  });
});

module.exports = server;

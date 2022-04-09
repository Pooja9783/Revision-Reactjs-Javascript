const express = require("express");
const app = express();
app.use(express());

const port = process.env.Port || 4000;
const connect = require("./config/db.js");

const hungerGameController = require("./controllers/hungerGame.controller");
app.use("/hungergame", hungerGameController);

app.listen(port, async () => {
  await connect();
  console.log("~~~~~~~~~~~Port Listening From 4000~~~~~~~~~~~~~~~~~");
});

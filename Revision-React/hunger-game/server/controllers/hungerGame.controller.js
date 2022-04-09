const express = require("express");
const router = express.Router();
const HungerGame = require("../models/hungerGame.model");

router.post("/", async (req, res) => {
  try {
    const hungerGame = await HungerGame.create(req.body);
    console.log(hungerGame);
    return res.status(201).send(hungerGame);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const hungerGame = await HungerGame.find().lean().exec();
    return res.send(hungerGame);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;

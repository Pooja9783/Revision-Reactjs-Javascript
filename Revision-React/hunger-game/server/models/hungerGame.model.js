const mongoose = require("mongoose");

const hungerGameSchema = new mongoose.Schema({
  name: { type: String, require: true },
  category: { type: String, require: true },
  costForOne: { type: Number, require: true },
  minRate: { type: Number, require: true },
  payment: { type: String, require: true },
  review: { type: String, require: true },
  vote: { type: Number, require: true },
  ratingStar: { type: Number, require: true },
});

module.exports = mongoose.model("hungergame", hungerGameSchema);

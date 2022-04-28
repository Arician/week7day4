const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  protag: {
    type: String,
    default: "Not specified",
  },
  protagVA: {
    type: String,
    default: "Not specified",
  },
  studio: {
    type: String,
    default: "Not specified",
  },
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;

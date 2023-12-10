const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: String,
  summary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", MoviesSchema);

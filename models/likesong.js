const mongoose = require("mongoose");
const SongSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  songId: {
    type: String,
  },
});
const likeSong = mongoose.model("likeSong", SongSchema);
module.exports = likeSong;

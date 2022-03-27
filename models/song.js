const mongoose = require("mongoose");
const SongSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  category: {
    type: String,
  },
  avatar: {
    type: String,
  },
  link: {
    type: String,
  },
  artist: {
    type: String,
  },
});
const Song = mongoose.model("Song", SongSchema);
module.exports = Song;

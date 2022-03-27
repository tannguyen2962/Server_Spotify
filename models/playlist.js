const mongoose = require("mongoose");
const PlaylistSchema = new mongoose.Schema({
    nameplaylist:{
      type: String,
  },
  songofplaylist: [{   
      idSong:{
          type:String,
      },
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
  }],
  
});
const Playlist = mongoose.model("Playlist", PlaylistSchema);
module.exports = Playlist;

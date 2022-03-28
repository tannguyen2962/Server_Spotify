const express = require("express");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://tannguyen:tannguyen123@cluster0.xv4bw.mongodb.net/Server_Spotify?retryWrites=true&w=majority";
// const url = "mongodb://localhost:127.0.0.1/Spotify";

const useMethodUser = require("./routes/method_user");
const useMethodSong = require("./routes/method_song");
const useMethodPlaylist = require("./routes/method_playlist");
const useMethodLikeSong = require("./routes/method_likesong");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(url);

app.use(useMethodSong);
app.use(useMethodUser);
app.use(useMethodPlaylist);
app.use(useMethodLikeSong);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (cors) => {
  console.log("server is running");
});

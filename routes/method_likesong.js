const express = require("express");
const likeSongModel = require("../models/likesong");
const songModel = require("../models/song");
const app = express();

//method post
app.post("/likesong", async (req, res) => {
  const likesong = new likeSongModel(req.body);
  try {
    const newLikeSong = await likesong.save();
    res.send(newLikeSong);
  } catch (error) {
    res.status(500).send(error);
  }
});

// method get

app.get("/likesongs", async (req, res) => {
  const likesong = await likeSongModel.find({});
  try {
    res.send(likesong);
  } catch (error) {
    res.status(500).send(error);
  }
});
// method put
app.put("/likesong/:id", async (req, res) => {
  try {
    const likesong = await likeSongModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    const updatelikesong = await likesong.save();
    res.send(updatelikesong);
  } catch (error) {
    res.status(500).send(error);
  }
});
// method deleted

app.delete("/likesong/:id", async (req, res) => {
  try {
    const likesong = await likeSongModel.findByIdAndDelete(
      req.params.id,
      req.body
    );
    if (!likesong) res.status(404).send("no item found");
    res.status(200).send(error);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/likesong/:userId/:songId", async (req, res) => {
  const likeSong = await likeSongModel.findOne({
    userId: req.params.userId,
    songId: req.params.songId,
  });
  try {
    res.send(likeSong);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/getLikeSongsByUserId/:userId", async (req, res) => {
  try {
    const likeSongs = await likeSongModel.find({ userId: req.params.userId });
    const promiseSongs = likeSongs.map((likeSong) =>
      songModel.findById(likeSong.songId)
    );

    const songs = await Promise.all(promiseSongs);
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/getLikeSongsBySongId/:songId", async (req, res) => {
  try {
    const likeSongs = await likeSongModel.find({ songId: req.params.songId });
    res.status(200).send(likeSongs);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;

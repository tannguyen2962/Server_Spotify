const express = require("express");
const userModel = require("../models/song");
const app = express();
//method post

app.post("/song", async (req, res) => {
  const song = new userModel(req.body);
  try {
    const newSong = await song.save();
    res.send(newSong);
  } catch (error) {
    res.status(500).send(error);
  }
});

// method get

app.get("/songs", async (req, res) => {
  const songs = await userModel.find({});
  try {
    res.send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
});
// get song by id
app.get("/song/:id", async (req, res) => {
  try {
    const song = await userModel.findById(req.params.id, req.body);
    const getSong = await song.save();
    res.send(getSong);
  } catch (error) {
    res.status(500).send(error);
  }
});

// method put
app.put("/song/:id", async (req, res) => {
  try {
    const song = await userModel.findByIdAndUpdate(req.params.id, req.body);
    const updateSong = await song.save();
    res.send(updateSong);
  } catch (error) {
    res.status(500).send(error);
  }
});
// method deleted

app.delete("/song/:id", async (req, res) => {
  try {
    const song = await userModel.findByIdAndDelete(req.params.id, req.body);
    if (!song) res.status(404).send("no item found");
    res.status(200).send(error);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = app;

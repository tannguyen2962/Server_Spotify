const express = require("express");
const userModel = require("../models/user");
const app = express();

// app data

app.post("/user", async (req, res) => {
  const user = new userModel(req.body);
  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users", async (req, res) => {
  const users = await userModel.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
    const updatedUser = await user.save();
    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id, req.body);
    if (!user) res.status(404).send("no item found");
    res.status(200).send(error);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = app;

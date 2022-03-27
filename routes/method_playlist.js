const express = require('express');
const userModel = require('../models/playlist');
const app = express();

//method post 

app.post('/playlist',async (req, res) => {
    const playlist = new userModel.findById(req.body);
    try {
        const newPlaylist = await playlist.save();
        res.send(newPlaylist);
    }catch(error){
        res.status(500).send(error);
    }

});

// method get 

app.get('/playlists',async (req, res) => {
    const playlists = await userModel.find({})
    try {
        res.send(playlists);

    }catch(error){
        res.status(500).send(error);
    }
});
// method put 
app.put('/playlist/:id',async (req, res) => {
    try {
        const playlist = await userModel.findByIdAndUpdate(req.params.id,req.body);
        const updatePlaylist = await playlist.save();
         res.send(updatePlaylist);

    } catch(error){
        res.status(500).send(error);
    }
})
// method deleted

app.delete('/playlist/:id',async (req, res) => {
    try {
          const playlist = await userModel.findByIdAndDelete(req.params.id,req.body);
          if(!playlist) res.status(404).send('no item found')
        res.status(200).send(error);

    } catch(error){
        res.status(500).send(error);
    }
})
module.exports = app;

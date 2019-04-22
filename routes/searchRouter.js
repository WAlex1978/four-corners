const app = require('express').Router();
const Location = require('../models/location');
const User = require('../models/user');

// Search locations endpoint
app.get('/', async (req, res) => {
    try {
        let params = {};

        // If search params is not null or empty
        // Set search params, case insensitive
        if (req.query.name !== null && req.query.name !== '') {
            params = new RegExp(req.query.name, 'i');
        }

        // Search for location by search params
        // If search params are empty, return all locations
        // Return only id, name, and image fields
        const data = await Location.find({name: params}, {id: 1, name: 1, image: 1});

        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

app.get('/location', async (req, res) => {
    try {
        const avatars = [];

        const data = await Location.findOne({id: req.query.id});
        if (!data) {
            throw new Error("Location not found");
        }

        for (let i = 0; i < data.comments.length; i++) {
            let avatar = await User.findOne({username: data.comments[i].name}, {avatar: 1});
            avatars.push(avatar);
        }

        res.send({location: data, avatars: avatars});
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
})

module.exports = app;
const app = require('express').Router();
const Location = require('../models/location');

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
        const data = await Location.findOne({id: req.query.id});
        if (!data) {
            throw new Error("Location not found");
        }

        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
})

module.exports = app;
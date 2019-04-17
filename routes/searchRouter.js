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
        const data = await Location.find({name: params});

        res.send(data);
    }
    catch (err) {
        res.status(400).send(err.toString());
    }
});

module.exports = app;
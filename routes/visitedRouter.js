const app = require('express').Router();
const jwt = require('jsonwebtoken');
const Location = require('../models/location');
const User = require('../models/user');

// Add visited endpoint
app.post('/', async (req, res) => {
    try {

        // Verify user JSON Web Token
        if (!await jwt.verify(req.body.token, 'secretPW')) {
            throw new Error ("Invalid credentials");
        }

        // Decode JSON Web Token, extract username
        // Add username to visited array
        const username = jwt.decode(req.body.token);
        const locationData = await Location.updateOne(
            {id: req.body.id},
            {$addToSet: {visited: username}},
        )

        const userData = await User.updateOne(
            {username: username.username},
            {$addToSet: {visited: req.body.id}}
        )
        
        res.send({locationData, userData});
    }
    catch (err) {
        res.status(400).send(err.toString());
    }
});

module.exports = app;
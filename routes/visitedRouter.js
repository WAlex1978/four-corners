const app = require('express').Router();
const jwt = require('jsonwebtoken');
const Location = require('../models/location');
const User = require('../models/user');

// Get visited endpoint
app.get('/', async (req, res) => {
    try {
        const locations = [];

        // Get user's visited list
        const user = await User.findOne({username: req.query.username}, {visited: 1});

        if (!user) {
            throw new Error("User not found");
        }
        
        for (let i = 0; i < user.visited.length; i++) {
            let data = await Location.find({id: user.visited[i]}, {id: 1, name: 1, image: 1});
            locations.push(data[0]);
        }

        // Return locations array
        res.send(locations);
    }
    catch(err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
})

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
        console.log(err);
        res.status(400).send(err.toString());
    }
});

module.exports = app;
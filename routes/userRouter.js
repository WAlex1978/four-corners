const app = require('express').Router();
const User = require('../models/user');
const Location = require('../models/location');

// Find user endpoint
app.get('/', async (req, res) => {
    try {
        const locations = [];
        const user = await User.findOne({username: req.query.username});

        if (!user) {
            throw new Error("User not found");
        }

        // Get user visited locations
        for (let i = 0; i < user.visited.length; i++) {
            let data = await Location.find({id: user.visited[i]}, {id: 1, name: 1, image: 1});
            locations.push(data[0]);
        }

        // Return user and visited locations
        res.send({user: user, locations: locations});
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

module.exports = app;
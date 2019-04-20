const app = require('express').Router();
const jwt = require('jsonwebtoken');
const Location = require('../models/location');
const Comment = require('../models/comment');

// Get comments endpoint
app.get('/', async (req, res) => {
    try {

        // Search by location ID
        const data = await Location.find({id: req.query.id});
        res.send(data[0].comments);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

// Post comment endpoint
app.post('/', async (req, res) => {
    try {

        // Verify user JSON Web Token
        if (!await jwt.verify(req.body.token, 'secretPW')) {
            throw new Error ("Invalid credentials");
        }

        // Decode JSON Web Token, extract username
        // Post comment to location by location ID
        const username = jwt.decode(req.body.token);
        const comment = new Comment({
            name: username.username,
            body: req.body.body,
        });
        const data = await Location.updateOne(
            {id: req.body.id},
            {$addToSet: {comments: comment}}   
        );
        
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

module.exports = app;
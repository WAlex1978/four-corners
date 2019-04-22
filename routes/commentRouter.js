const app = require('express').Router();
const jwt = require('jsonwebtoken');
const Location = require('../models/location');
const User = require('../models/user');
const Comment = require('../models/comment');

// Get comments endpoint
app.get('/', async (req, res) => {
    try {
        const avatars = []

        // Search by location ID
        const data = await Location.findOne({id: req.query.id});
        for (let i = 0; i < data.comments.length; i++) {
            let avatar = await User.findOne({username: data.comments[i].name}, {avatar: 1});
            avatars.push(avatar);
        }

        res.send({comments: data.comments, avatars: avatars});
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
        // Find user to extract avatar
        const username = jwt.decode(req.body.token);

        // Post comment to location by location id
        const comment = new Comment({
            name: username.username,
            body: req.body.body,
        });
        const data = await Location.updateOne(
            {id: req.body.id},
            {$addToSet: {comments: comment}}   
        );

        const avatar = await User.findOne({username: username.username}, {avatar: 1});
        
        res.send({comment: comment, avatar: avatar, data: data});
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

module.exports = app;
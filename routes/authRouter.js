const app = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

// User registration endpoint
app.post('/register', async (req, res) => {
    try {

        // Check if username exists in database
        const search = await User.find({username: new RegExp(req.body.username, 'i')})
        if (search.length > 1) {
            throw new Error("Username already exists");
        }

        // If username does not exist, hash password
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const user = new User({
            username: req.body.username,
            password: hash,
        });

        // Save username to database
        const data = await user.save();
        res.send(data);
    }
    catch (err) {
        res.status(400).send(err.toString());
    }
});

// User login endpoint
app.post('/login', async (req, res) => {
    try {

        // Check if username exists in database
        const search = await User.find({username: new RegExp(req.body.username, 'i')})
        if (search.length === 0) {
            throw new Error("Username not found");
        }

        // Verify password against hashed password
        const match = await bcrypt.compare(req.body.password, search[0].password);
        if (!match) {
            throw new Error("Incorrect password");
        }

        // Sign and distribute JSON Web Token
        const token = await jwt.sign({username: req.body.username}, 'secretPW');
        res.send(token);
    }
    catch (err) {
        res.status(400).send(err.toString());
    }
})

module.exports = app;
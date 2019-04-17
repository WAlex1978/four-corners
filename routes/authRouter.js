const app = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

app.post('/register', async (req, res) => {
    try {
        const search = await User.find({username: req.body.username.toLowerCase()})
        if (search.length > 1) {
            throw new Error("Username already exists");
        }

        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const user = new User({
            username: req.body.username.toLowerCase(),
            password: hash,
        });

        const data = await user.save();
        res.send(data);
    }
    catch (err) {
        res.send(err.toString());
    }
});

app.post('/login', async (req, res) => {
    try {
        const search = await User.find({username: req.body.username.toLowerCase()})
        if (search.length === 0) {
            throw new Error("Username not found");
        }

        const match = await bcrypt.compare(req.body.password, search[0].password);
        if (!match) {
            throw new Error("Incorrect password");
        }

        const token = await jwt.sign({username: req.body.username}, 'secretPW');
        res.send(token);
    }
    catch (err) {
        res.send(err.toString());
    }
})

module.exports = app;
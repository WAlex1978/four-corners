const app = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

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

module.exports = app;
const app = require('express').Router();
const jwt = require('jsonwebtoken');
const Location = require('../models/location');

app.get('/', async (req, res) => {
    try {
        const data = await Location.find({id: req.query.id});
        res.send(data[0].comments);
    }
    catch (err) {
        res.status(400).send(err.toString());
    }
});

app.post('/', async (req, res) => {
    try {
        if (!await jwt.verify(req.body.token, 'secretPW')) {
            throw new Error ("Invalid credentials");
        }

        const username = jwt.decode(req.body.token);
        const data = await Location.updateOne(
            {id: req.body.id},
            {$addToSet: {comments: {name: username.username, body: req.body.body}}}   
        )
        
        res.send(data);
    }
    catch (err) {
        res.status(400).send(err.toString());
    }
});

module.exports = app;
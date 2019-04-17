const app = require('express').Router();
const Location = require('../models/location');

app.get('/', async (req, res) => {
    try {
        const data = await Location.find({id: req.query.id});
        res.send(data[0].comments);
    }
    catch (err) {
        res.send(err.toString());
    }
});

app.post('/', async (req, res) => {
    try {
        const data = await Location.updateOne(
            {id: req.body.id},
            {$addToSet: {comments: {name: req.body.name, body: req.body.body}}}   
        )
        
        res.send(data);
    }
    catch (err) {
        res.send(err.toString());
    }
});

module.exports = app;
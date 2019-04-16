const app = require('express').Router();
const Location = require('../models/location');

app.get('/', async (req, res) => {
    try {
        const data = await Location.find({id: req.query.id});
        res.send(data[0].comments);
        console.log(data[0])
    }
    catch (err) {
        console.log(err)
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
        console.log(err);
    }
});

module.exports = app;
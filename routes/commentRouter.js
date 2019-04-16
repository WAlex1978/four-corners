const app = require('express').Router();
const Location = require('../models/location');

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
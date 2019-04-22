const app = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Location = require('../models/location');
const cloudinary = require('cloudinary').v2;
const datauri = require('datauri');
const path = require('path');

const dUri = new datauri();
const dataUri = image => dUri.format(path.extname(image.name).toString(), image.data);

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

        // Alphabetically sort locations
        locations.sort(function (a, b) {
            let A=a.name.toLowerCase(), B=b.name.toLowerCase();

            if (A < B)
                return -1 
            if (A > B)
                return 1
            return 0 
        });

        // Return user and visited locations
        res.send({user: user, locations: locations});
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.toString());
    }
});

// Upload avatar endpoint
app.post('/avatar', async (req, res) => {
    try {

        // Verify user JSON Web Token
        if (!await jwt.verify(req.body.token, 'secretPW')) {
            throw new Error ("Invalid credentials");
        }

        // Verify image exists
        if (!req.files || !req.files.image) {
            throw new Error("No image uploaded");
        }

        // Verify image filesize does not exceed 500 KB
        if (req.files.image.size > 500000) {
            throw new Error("Exceeded maximum image filesize");
        }

        // Verify file is of a supported format
        if (req.files.image.mimetype !== 'image/png' && req.files.image.mimetype !== 'image/jpg') {
            throw new Error("Unsupported filetype");
        }
        
        const file = dataUri(req.files.image).content;
        const upload = await cloudinary.uploader.upload(file, options = {folder: 'avatars'});

        // Decode JSON Web Token, extract username
        // Find user to update avatar
        const username = jwt.decode(req.body.token);
        const data = await User.updateOne(
            {username: username.username}, 
            {avatar: upload.url}
        );

        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = app;
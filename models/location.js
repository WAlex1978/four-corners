const mongoose = require('mongoose');

const location = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    visited: Number,
    comments: [],
})

module.exports = mongoose.model('location', location);
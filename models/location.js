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
    desc: [],
    ref: {
        type: String,
        required: true,
    },
    visited: [],
    comments: [],
})

module.exports = mongoose.model('location', location);
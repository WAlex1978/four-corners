const mongoose = require('mongoose');

const location = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    visited: Number,
    comments: []
})

module.exports = mongoose.model('location', location);
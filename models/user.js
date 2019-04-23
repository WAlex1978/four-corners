const mongoose = require('mongoose');

const user = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    avatar: {
        type: String,
        default: process.env.DEFAULT_AVATAR_URL,
    },
    visited: [],
})

module.exports = mongoose.model('user', user);
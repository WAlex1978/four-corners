const mongoose = require('mongoose');
const dateFormat = require('dateformat');
const now = new Date();

const comment = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: dateFormat(now, "mmmm dS, yy"),
    },
})

module.exports = mongoose.model('comment', comment);
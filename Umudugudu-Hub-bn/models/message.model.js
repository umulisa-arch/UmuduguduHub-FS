const mongoose = require('mongoose');

const MessageModel = new mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('message', MessageModel);
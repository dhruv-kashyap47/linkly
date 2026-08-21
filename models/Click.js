const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
    url: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Url',
        required: true
    },

    ipAddress: {
        type: String
    },

    referrer: {
        type: String
    },

    userAgent: {
        type: String
    },

    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Click', clickSchema);

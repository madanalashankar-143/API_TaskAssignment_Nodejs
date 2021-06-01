const mongoose = require('mongoose');

var schema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        unique : true,
        required: true
    },

    email: {
        type: String,
        unique : true,
        required: true
    },

    address: {
        street: {
            type: String,
            required: true
        },
        locality: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        coordinateType: {
            type: String,
            required: true
        },
        coordinates: {
            type: String,
            required: true
        }
    }
} )

const UserDB = mongoose.model('userdb', schema);

module.exports = UserDB;

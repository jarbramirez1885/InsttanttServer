const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    documenttype: {
        type: String,
        required: true
    },
    documentnumber: {
        type: Number,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    expeditiondate: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', UserSchema)
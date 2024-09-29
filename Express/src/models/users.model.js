const mongoose = require('mongoose');
const { Schema } = mongoose;
const toJsonPlugin = require('./plugins/toJson.plugin');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    __password: { // double underscore for private field
        type: String,
        required: true
    },
    session: {
        sessionID: {
            type: String,
            required: false
        },
        sessionStart: {
            type: Date,
            required: false
        },
        sessionEnd: {
            type: Date,
            required: false
        }
    },
}, {
    timestamps: true,
    collection: 'users'
});


userSchema.plugin(toJsonPlugin);

const User = mongoose.model('users', userSchema);

module.exports = User;
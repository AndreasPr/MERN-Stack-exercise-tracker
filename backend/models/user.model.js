const mongoose = require('mongoose');
//We are creating the schema for the user

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
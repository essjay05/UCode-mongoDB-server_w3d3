// Require in Mongoose
const mongoose = require('mongoose');

// Create Person SCHEMA
const PersonSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 1
    },
    age : {
        type: Number,
        required: true
    },
    isFun : {
        type: Boolean,
        required: false
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})
// Make this a Model using mongoose.model
const Person = mongoose.model('Person', PersonSchema);

// Make exportable
module.exports = Person;
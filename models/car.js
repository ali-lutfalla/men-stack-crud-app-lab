const mongoose = require('mongoose');

const carSchema = {
    company: String,
    model: Number,
    year: Number
};

const cars = mongoose.model('Cars',carSchema);

module.exports = cars;
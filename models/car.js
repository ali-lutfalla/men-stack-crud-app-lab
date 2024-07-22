const mongoose = require('mongoose');

const carSchema = {
    company: String,
    model: String,
    year: Number
};

const cars = mongoose.model('Cars',carSchema);

module.exports = cars;
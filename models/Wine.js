const mongoose = require('mongoose');


const wineSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        require: true
    },
    lage: {
        type: String,
        required: true
    },
    sweetness: {
        type: String,
        required: true
    },
    sugarLevel: {
        type: Number,
        required: true
    },
    wineType: {
        type: String,
        required: true
    },
    wineColor: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    alcoholLevel: {
        type: Number,
        required: true
    },
    vintage: {
        type: String,
        required: true
    },
    validEAN: {
        type: Boolean,
        required: true
    },
    acidity: {
        type: Number,
        required: true
    },
    winery: {
        type: String,
        required: true
    },
    grape: {
        type: String,
        required: true
    },
    appellation: {
        type: String,
        required: true
    }
});

const Wine = module.exports = mongoose.model('wine', wineSchema);
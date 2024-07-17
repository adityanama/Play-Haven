const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Game", gameSchema);
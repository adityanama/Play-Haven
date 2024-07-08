const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    games: {
        type: [Object],
    },
});

module.exports = mongoose.model("Cart", cartSchema);
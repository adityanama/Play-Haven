const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    tag: {
        type: [Number],
        required: true,
    },
})

module.exports = mongoose.model("Cart", cartSchema);
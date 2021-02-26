const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    parent_category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("SubCategory", subcategorySchema);
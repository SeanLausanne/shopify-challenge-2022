const mongoose = require("mongoose");

const inventoryItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    }
});

exports.InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);

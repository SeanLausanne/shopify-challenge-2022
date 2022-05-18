const mongoose = require("mongoose");

const inventoryItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
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
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletionComments: {
        type: String,
        default: ""
    }
});

exports.InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);

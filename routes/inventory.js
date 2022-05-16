const express = require('express');
const router = express.Router();
const { InventoryItem } = require('../models/inventoryItem');

router.post('/add', async (req, res) => {

    // const inventoryItem = req.body.item;
    const inventoryItem = new InventoryItem ({
        name: 'iPhone',
        brand: 'Apple',
        price: 1000
    })

    const result = await inventoryItem.save();
    console.log(result);
})

module.exports = router;
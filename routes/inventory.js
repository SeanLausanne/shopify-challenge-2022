const express = require('express');
const router = express.Router();
const { InventoryItem } = require('../models/inventoryItem');

router.get('/add', async (req, res) => {

    // const inventoryItem = req.body.item;
    const inventoryItem = new InventoryItem ({
        name: 'iPhone',
        brand: 'Apple',
        price: 1000
    })

    const result = await inventoryItem.save();
    console.log(result);
    res.send('Successfully added')
})

module.exports = router;
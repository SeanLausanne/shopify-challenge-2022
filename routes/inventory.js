const express = require('express');
const router = express.Router();
const { InventoryItem } = require('../models/inventoryItem');
const fs = require('fs');

const itemList = JSON.parse(fs.readFileSync('./items.json'));


router.get('/add/:idx', async (req, res) => {

    const idx = req.params.idx;
    if (idx > 4) {
        return res.send('idx can only be 1, 2, 3, 4');
    }

    const inventoryItem = new InventoryItem(itemList.inventoryItems[idx - 1]);

    const result = await inventoryItem.save()
        .catch(err => console.log('Unable to save', err));;
    const output = {
        result: result
    }
    res.send(result);
});

router.get('/view', async (req, res) => {
    const items = await InventoryItem.find({deleted: false});
    console.log(items);
    const output = {
        result: items
    }
    res.send(output);
})

router.get('/viewbyname/:name', async (req, res) => {
    const name = req.params.name;
    const items = await InventoryItem.find({name: name, deleted: false});
    console.log(items);
    const output = {
        result: items
    }
    res.send(output);
})

router.get('/updatebyname/:name/:quantity', async (req, res) => {
    const name = req.params.name;
    const quantity = req.params.quantity;
    const result = await InventoryItem.updateMany({name: name, deleted: false}, {
        $set: {
            quantity: quantity,
        }
    });

    const modifiedCount = result.modifiedCount;
    const output = {
        result: `${modifiedCount} results have been modified`
    }
    res.send(output);
})

router.get('/deletebyname/:name/:comments', async (req, res) => {
    const name = req.params.name;
    const comments = req.params.comments;
    const result = await InventoryItem.updateMany({name: name, deleted: false}, {
        $set: {
            deleted: true,
            deletionComments: comments
        }
    });
    const modifiedCount = result.modifiedCount;
    const output = {
        result: `${modifiedCount} items have been deleted`
    }
    res.send(output);
})

router.get('/undelete/:name', async (req, res) => {
    const name = req.params.name;
    const result = await InventoryItem.updateMany({name: name, deleted: true}, {
        $set: {
            deleted: false,
            deletionComments: ""
        }
    });
    const modifiedCount = result.modifiedCount;
    const output = {
        result: `${modifiedCount} items have been restored`
    }
    res.send(output);
})

router.get('/viewdeleted', async (req, res) => {
    const name = req.params.name;
    const items = await InventoryItem.find({deleted: true});
    console.log(items);
    const output = {
        result: items
    }
    res.send(output);
})

router.get('/purge', async (req, res) => {
    const result = await InventoryItem.deleteMany({deleted: true});
    const deleteCount = result.deletedCount;
    const output = {
        result: `${deleteCount} items have been permanently deleted`
    }
    res.send(output);
})

module.exports = router;
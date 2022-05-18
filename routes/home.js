const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is Xiao Ling's repo of Shopify backend challenge");
})

module.exports = router;
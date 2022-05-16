const express = require('express');
const mongoose = require('mongoose');
const inventory = require('./routes/inventory');

app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://shopify:shopify@shopify-challenge.f91pc.mongodb.net/test')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Cannot connect', err));

app.use('/inventory', inventory);

const port = 5000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
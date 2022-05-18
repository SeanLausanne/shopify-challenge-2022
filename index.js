const express = require('express');
const mongoose = require('mongoose');
const inventory = require('./routes/inventory');
const home = require('./routes/home');

app = express();
app.use(express.json());
app.set('view engine', 'pug');

// connect to MongoDB
mongoose.connect('mongodb+srv://shopify:shopify@shopify-challenge.f91pc.mongodb.net/test')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Cannot connect', err));

app.use('/', home);
app.use('/inventory', inventory);

const port = 5000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
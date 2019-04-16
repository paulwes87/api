const express = require('express');
const app = express();

const prodRoutes = require ('./api/routes/products');
const orderRoutes = require ('./api/routes/orders');
/*
app.use((req, res, next)=>{
    res.status(200).json({
        message: 'the api launches!'
    });
});
*/
app.use('/products', prodRoutes);
app.use('/orders',orderRoutes);

module.exports = app;
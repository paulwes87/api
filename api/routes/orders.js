const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET request to /orders - Orders are fetched'
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Handling POST request to /orders - Orders are created'
    });
});

router.get('/:orderId', (req, res, next)=>{
    let orderID = req.params.orderID;
    res.status(200).json({
        message: 'Order details'+orderID,
        ID: orderID

    });
});

module.exports = router;

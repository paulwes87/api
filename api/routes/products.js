const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productID',(req, res, next)=>{
    const id = req.params.productID;
    if (id == 'special') {
        res.status(200).json({
            message: 'Found the product as '+id,
            ID: id
        });
    } else {
        res.status(201).json({
            message: 'you entered a wrong id',
            ID: id
        });
    }
});

router.patch('/:productID',(req, res, next) => {
    let productID =req.params.productID;
    res.status(200).json({
        message: 'Updated a new product',
        ID: productID
    });
});

router.delete('/:productID',(req, res, next) => {
    let productID =req.params.productID;
    res.status(201).json({
        message: 'Deleted a new product',
        ID: productID
    });
});

module.exports = router;
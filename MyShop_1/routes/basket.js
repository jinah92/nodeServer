const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const product = req.body.product;
    if(req.session.email){
        const my_basket = req.session.basket;
        my_basket.push(req.body.product + ', ');
    }
    console.log(req.session.basket);
    res.json({message:req.session.basket});
});

module.exports = router;
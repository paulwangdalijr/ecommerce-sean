const database = require('../config/database');
const express = require('express');
const router = express.Router();


router.get('/getProducts', (req, res, next) => {
    database.all("SELECT * FROM product", (err,rows)=>{
        if(err){
            res.json({success: false, message: "Error getting products: " + err});
        }else{
            res.json({success: true, rows});
        }

    });
});

module.exports = router;


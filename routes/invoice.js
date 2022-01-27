const express = require('express');
const Invoice = require('../models/invoice');
const router = express.Router();

//save invoice
router.post('/invoice/save',(req,res) => {
    let newInvoice = new Invoice(req.body);
    newInvoice.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        } 
        return res.status(200).json({
            success:"Invoice saved successfully!!"
        });
    });
});


//get invoice
router.get('/invoice',(req,res) => {
    Invoice.find().exec((err,invoice) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProduct:invoice
        });
    });
});

//clear product
router.delete('/product/delete/:id',(req,res) => {
    Product.findByIdAndRemove(req.params.id).exec((err,clearProduct) => {
        if(err) return res.status(400).json({
            message: "Clear product unsuccessful!!",err
        });

        return res.json({
            message: "Clear product successfully!!", clearProduct
        });
    });
});


module.exports = router;

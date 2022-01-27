const express = require('express');
const Product = require('../models/product');
const router = express.Router();

//save product
router.post('/product/save',(req,res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        } 
        return res.status(200).json({
            success:"Product saved successfully!!"
        });
    });
});


//get post
router.get('/product',(req,res) => {
    Product.find().exec((err,product) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProduct:product
        });
    });
});

//get a specific product 
router.get("/product/:id",(req,res) => {
    let productid =req.params.id;

    Product.findById(productid,(err,product) => {
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            product
        })
    })
})


//update product
router.put('/product/update/:id',(req,res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,product) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                sucess: "Product updated successfully!!"
            });
        }
    );
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

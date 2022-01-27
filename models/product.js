const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const productSchema = new mongoose.Schema({
    Product_id: {
        type:String,
        required:true
    },

    Product_name: {
        type:String,
        required:true
    },

    Product_price: {
        type:String,
        required:true
    },

    Product_qty: {
        type:String,
        required:true
    }

    
});

module.exports = mongoose.model('Products', productSchema)
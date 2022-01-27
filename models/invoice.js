const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const invoiceSchema = new mongoose.Schema({
    Invoice_Hed_id: {
        type:String,
        required:true
    },

    Invoice_Hed_date: {
        type:String,
        required:true
    },

    Invoice_Hed_customer: {
        type:String,
        required:true
    },

    Invoice_Details_id: {
        type:String,
        required:true
    },

    Invoice_Details_qty: {
        type:String,
        required:true
    },

    Invoice_Details_amount: {
        type:String,
        required:true
    },

    Invoice_Hed_Amount: {
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model('Invoice', invoiceSchema)
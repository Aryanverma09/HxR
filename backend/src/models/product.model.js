
/**
 * @description Product model
 * @author Aryan Verma
 */
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:[true,'Please enter product name']
    },productID:{
        type:String,
        required:[true,'Please enter product ID']
    },productDiscription:{
        type:String,
        required:[true,'Please enter product discription']
    },productPrice:{
        type:Number,
        required:[true,'Please enter product price']
    },productImage:{
        type:String,
        required:[true,'Please enter product image']
    }
},{
    timestamps:true
})
const producModel = mongoose.model('product', productSchema);
module.exports = producModel;
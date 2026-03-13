const productModel = require("../models/product.model");
/**
 * @name createProduct
 * @description This file contains the controller for creating a product
 */
async function createProduct(req, res) {
  try {
    const {
      productName,
      productID,
      productDiscription,
      productPrice,
      productImage,
    } = req.body;
    if(!productName || !productID || !productDiscription || !productPrice || !productImage){
        return res.status(400).json({message: "All fields are required"})
    }
    const product = await productModel.create({
        productName,
        productID,
        productDiscription,
        productPrice,
        productImage,
    })
    return res.status(201).json({message: "Product created successfully", product})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal server error"})
  }
}
/**
 * @name getAllProducts
 * @description This file contains the controller for getting all products
 */
async function getAllProducts(req,res){
  try{
    const products = await productModel.find()
    return res.status(200).json({message: "All products", products})
  } catch(error){
    console.log(error)
  }
}
/**
 * @name updateProduct
 * @description This file contains the controller for updating a product
 */
async function updateProduct(req,res){
  const {id} = req.params;
  try{
    const product = await productModel.findByIdAndUpdate(id,req.body,{new:true});
    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
    return res.status(200).json({message: "Product updated successfully", product})
  }catch(error){
    console.log(error)
  }
}
/**
 * @name deleteProduct
 * @description This file contains the controller for deleting a product
 */
async function deleteProduct(req,res){
  const {id} = req.params;
  try{
    const product = await productModel.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
    return res.status(200).json({message: "Product deleted successfully"})
  }catch(error){
    console.log(error)
  }
}

module.exports = {createProduct, getAllProducts , updateProduct , deleteProduct};
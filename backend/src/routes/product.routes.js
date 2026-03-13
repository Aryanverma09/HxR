const { Router } = require("express");
const {createProduct  ,getAllProducts ,updateProduct ,deleteProduct} = require("../controllers/product.controller");
const productRoute = Router();
/**
 * @description: Use to add products.
 * @route /api/products
 * @method POST
 * @access public
 */
productRoute.post("/products", createProduct);
/**
 * @description: Use to get all products.
 * @route /api/products
 * @method GET
 * @access public
 */
productRoute.get("/all-products",getAllProducts)
/**
 * @description: Use to update a product.
 * @route /api/products/:id
 * @method PUT
 * @access public
 */
productRoute.put("/products/:id",updateProduct)

productRoute.delete("/products/:id",deleteProduct)

module.exports = productRoute;

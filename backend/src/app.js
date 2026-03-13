const express = require('express')
const contactRoute = require("./routes/contact.routes");
const productRoute = require('./routes/product.routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
/**
 * @name contactRoute
 * @description This is the route for contact us form
 * @route /api/contact
 * @method POST
 * @access public
 */
app.use('/api',contactRoute)
/**
 * @name productRoute
 * @description This is the route for product management
 * @route /api/products
 * @method GET, POST, PUT, DELETE
 * @access public
 */
app.use('/api',productRoute)

module.exports = app;
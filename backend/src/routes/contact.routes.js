/**
 * @description: This file defines the routes for handling contact form submissions. It uses Express Router to create a route for the POST request to '/contact', which will invoke the createContact controller function to process the contact form data.
 * @route: /api/contact
 * @method: POST
 * @access: public
 */
const {Router} = require('express');
const contactRoute= Router();
const createContact = require('../controllers/contact.controller')

contactRoute.post('/contact',createContact)

module.exports = contactRoute;
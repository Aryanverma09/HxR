const {Router} = require('express');
const contactRoute= Router();
const createContact = require('../controllers/contact.controller')

contactRoute.post('/contact',createContact)

module.exports = contactRoute;
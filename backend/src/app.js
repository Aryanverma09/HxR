const express = require('express')
const contactRoute = require("./routes/contact.routes")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',contactRoute)
module.exports = app;
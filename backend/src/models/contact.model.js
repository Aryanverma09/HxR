const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});
const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;

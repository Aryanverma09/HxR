const contactModel = require("../models/contact.model");

async function createContact(req, res) {
  try {
    const { name, company, email, phone, message } = req.body;
    if (!name || !company || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const contact = await contactModel.create({
      name,
      company,
      email,
      phone,
      message,
    });
    res.status(201).json({ message: "Contact created successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = createContact;

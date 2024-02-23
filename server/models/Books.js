// models/Book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // Add other book-related fields here
});

module.exports = mongoose.model("Book", bookSchema);

// routes/books.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth'); // Middleware to verify JWT token
const Book = require('../models/Book'); // Your Book model

// Create a new favorite book
router.post('/books', verifyToken, async (req, res) => {
    try {
        const { title, author } = req.body;

        // Create a new book
        const newBook = new Book({
            title,
            author,
            // Add other book-related fields here
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all favorite books
router.get('/books', verifyToken, async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a favorite book
router.put('/books/:id', verifyToken, async (req, res) => {
    try {
        const { title, author } = req.body;
        const bookId = req.params.id;

        // Update the book
        await Book.findByIdAndUpdate(bookId, { title, author });
        res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a favorite book
router.delete('/books/:id', verifyToken, async (req, res) => {
    try {
        const bookId = req.params.id;

        // Delete the book
        await Book.findByIdAndDelete(bookId);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

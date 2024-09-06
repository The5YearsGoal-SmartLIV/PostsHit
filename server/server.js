// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');

// Initialize dotenv to access environment variables
dotenv.config();

// Create an instance of express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a simple route for /home
app.get('/home', (req, res) => {
    res.status(200).json({
        message: 'Welcome to server'
    });
});

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

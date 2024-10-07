const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import auth routes
const employeeRoutes = require('./routes/employee'); // Import employee routes
const directoryRoutes = require('./routes/directory'); // Import directory routes

const app = express();

// Load environment variables
dotenv.config(); 

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected Successfully");
    } catch (err) {
        console.log(err);
    }
};

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/employees', employeeRoutes); // Employee routes
app.use('/api/directories', directoryRoutes); // Directory routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();    
    console.log(`App is running on port ${PORT}`);
});

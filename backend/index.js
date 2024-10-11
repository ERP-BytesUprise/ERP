// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import auth routes
const employeeRoutes = require('./routes/employee'); // Import employee routes
const directoryRoutes = require('./routes/directory'); // Import directory routes
const recruitmentRoutes = require('./routes/recruitment'); // Import recruitment routes

const app = express();

// Load environment variables
dotenv.config(); 

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // Removed deprecated options
        console.log("DB connected Successfully");
    } catch (err) {
        console.error("DB connection failed:", err.message);
        process.exit(1); // Exit process with failure
    }
};

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/employees', employeeRoutes); // Employee routes
app.use('/api/directories', directoryRoutes); // Directory routes
app.use('/api/recruitment', recruitmentRoutes); // Recruitment routes

// Start the server after connecting to the database
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err.message);
});

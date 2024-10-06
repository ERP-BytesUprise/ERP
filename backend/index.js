const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import auth routes

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
app.use(express.json()); // Add this line to parse JSON requests

// Routes
app.use('/api/auth', authRoutes); // Set up the authentication routes

// Start the server
app.listen(process.env.PORT, () => {
    connectDB();    
    console.log(`App is running on port ${process.env.PORT}`);
});

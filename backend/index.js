const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employee');
const directoryRoutes = require('./routes/directory');
const authRoutes = require('./routes/auth');
const recruitmentRoutes = require('./routes/recruitment'); // Add this line

const app = express();

// Load environment variables
dotenv.config(); 

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected Successfully");
    } catch (err) {
        console.error("DB connection failed:", err.message);
        process.exit(1);
    }
};

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/directories', directoryRoutes);
app.use('/api/auth', authRoutes); // Existing auth routes
app.use('/api/recruitments', recruitmentRoutes); // Add this line for recruitment

// Start the server after connecting to the database
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err.message);
});

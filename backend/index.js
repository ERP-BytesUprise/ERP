const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employee');
const directoryRoutes = require('./routes/directory');
const authRoutes = require('./routes/auth');
const recruitmentRoutes = require('./routes/recruitment'); // Add this line
const cron = require('node-cron');
const ExcelJS = require('exceljs');
const excelRoutes = require('./routes/excel'); // Add this line
// Initialize the Express app
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

app.use('/api/excel', excelRoutes); // Add this line for excel routes

// Function to read data from Excel and update MongoDB
const updateFromExcel = async (filePath, Model) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1); // Get the first worksheet

    // Loop through each row and update the database
    worksheet.eachRow(async (row, rowNumber) => {
        // Example: Assuming the Excel has columns for employee data
        const data = {
            name: row.getCell(1).value, // Adjust according to your Excel structure
            email: row.getCell(2).value,
            position: row.getCell(3).value,
            // Add other fields as necessary
        };

        // Check if the entry exists and update or insert as needed
        const existingEntry = await Model.findOne({ email: data.email });
        if (existingEntry) {
            await Model.updateOne({ email: data.email }, data); // Update if exists
        } else {
            const newEntry = new Model(data);
            await newEntry.save(); // Create new if not exists
        }
    });
};

// Cron job to run every hour (adjust as needed)
cron.schedule('0 * * * *', async () => {
    console.log('Updating database from Excel...');
    await updateFromExcel('path/to/your/employees.xlsx', EmployeeModel); // Adjust the path and Model
    await updateFromExcel('path/to/your/directories.xlsx', DirectoryModel); // Adjust the path and Model
});

// Start the server after connecting to the database
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err.message);
});

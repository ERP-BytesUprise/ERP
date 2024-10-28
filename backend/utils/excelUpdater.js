const mongoose = require('mongoose');
const XLSX = require('xlsx');
const Employee = require('../models/Employee/Employee'); // Update with your actual employee model path
const Directory = require('../models/Directory/directory'); // Update with your actual directory model path

// Function to update employee data from Excel
const updateEmployeeDataFromExcel = async (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    for (const item of data) {
        // Logic to insert or update data in the MongoDB
        await Employee.updateOne({ email: item.email }, { $set: item }, { upsert: true });
    }
};

// Function to update directory data from Excel
const updateDirectoryDataFromExcel = async (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    for (const item of data) {
        // Logic to insert or update data in the MongoDB
        await Directory.updateOne({ email: item.email }, { $set: item }, { upsert: true });
    }
};

module.exports = {
    updateEmployeeDataFromExcel,
    updateDirectoryDataFromExcel
};

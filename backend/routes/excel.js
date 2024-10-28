const express = require('express');
const router = express.Router();
const axios = require('axios');
const XLSX = require('xlsx');
const Employee = require('../models/Employee/Employee');
const Directory = require('../models/Directory/directory');

// Directory Data Upload Endpoint
router.post('/upload-directory-url', async (req, res) => {
    const { fileUrl } = req.body;

    try {
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: 'array' });
        const directorySheet = workbook.Sheets['Directory']; // Ensure the sheet name matches
        const directoryData = XLSX.utils.sheet_to_json(directorySheet);

        for (const entry of directoryData) {
            if (entry.email) {
                await Directory.findOneAndUpdate(
                    { email: entry.email },
                    entry,
                    { upsert: true, new: true }
                );
            }
        }

        res.status(200).json({ message: 'Directory data uploaded and synced successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Employee Data Upload Endpoint
router.post('/upload-employee-url', async (req, res) => {
    const { fileUrl } = req.body;

    try {
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: 'array' });
        const employeesSheet = workbook.Sheets['Employees']; // Ensure the sheet name matches
        const employeesData = XLSX.utils.sheet_to_json(employeesSheet);

        for (const entry of employeesData) {
            if (entry.employeeId && entry.name) {
                await Employee.findOneAndUpdate(
                    { employeeId: entry.employeeId },
                    entry,
                    { upsert: true, new: true }
                );
            }
        }

        res.status(200).json({ message: 'Employee data uploaded and synced successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

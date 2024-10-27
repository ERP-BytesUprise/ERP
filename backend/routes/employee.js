const express = require('express');
const Employee = require('../models/Employee/Employee'); // Ensure this is the correct path
const router = express.Router();

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    const employee = new Employee(req.body);
    try {
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an employee
router.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

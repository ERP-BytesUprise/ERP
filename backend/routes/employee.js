const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee/Employee'); // Import the Employee model

// GET all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a specific employee by ID
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        employeeId: req.body.employeeId,
        name: req.body.name,
        role: req.body.role,
        employmentType: req.body.employmentType,
        status: req.body.status,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        workType: req.body.workType,
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT to update an employee by ID
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });

        // Update fields
        employee.name = req.body.name || employee.name;
        employee.role = req.body.role || employee.role;
        employee.employmentType = req.body.employmentType || employee.employmentType;
        employee.status = req.body.status || employee.status;
        employee.checkIn = req.body.checkIn || employee.checkIn;
        employee.checkOut = req.body.checkOut || employee.checkOut;
        employee.workType = req.body.workType || employee.workType;

        const updatedEmployee = await employee.save();
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE an employee by ID
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });

        await employee.remove();
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

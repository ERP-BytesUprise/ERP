const express = require('express');
const router = express.Router();
const Directory = require('../models/Directory/directory'); // Import Directory model

// GET all directory entries
router.get('/', async (req, res) => {
    try {
        const directories = await Directory.find().populate('employeeId', 'name email'); // Populate employeeId with name and email
        res.status(200).json(directories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a specific directory entry by ID
router.get('/:id', async (req, res) => {
    try {
        const directory = await Directory.findById(req.params.id).populate('employeeId', 'name email');
        if (!directory) return res.status(404).json({ message: 'Directory entry not found' });
        res.status(200).json(directory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new directory entry
router.post('/', async (req, res) => {
    const directory = new Directory({
        employeeId: req.body.employeeId,
        status: req.body.status,
        position: req.body.position,
        photo: req.body.photo,
        email: req.body.email,
        location: req.body.location,
        contact: req.body.contact,
        birthday: req.body.birthday,
    });

    try {
        const newDirectory = await directory.save();
        res.status(201).json(newDirectory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Other CRUD routes (PUT, DELETE) can be added similarly

module.exports = router;

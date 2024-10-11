// backend/routes/recruitment.js
const express = require('express');
const router = express.Router();
const Recruitment = require('../models/Recruitment/recruitment'); // Import Recruitment model

// GET all recruitment entries
router.get('/', async (req, res) => {
    try {
        const recruitments = await Recruitment.find();
        res.status(200).json(recruitments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a specific recruitment entry by ID
router.get('/:id', async (req, res) => {
    try {
        const recruitment = await Recruitment.findById(req.params.id);
        if (!recruitment) return res.status(404).json({ message: 'Recruitment entry not found' });
        res.status(200).json(recruitment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new recruitment entry
router.post('/', async (req, res) => {
    const recruitment = new Recruitment({
        jobTitle: req.body.jobTitle,
        industry: req.body.industry,
        location: {
            city: req.body.location.city,
            country: req.body.location.country,
        },
        team: req.body.team, // Optional
        employmentDetails: {
            jobType: req.body.employmentDetails.jobType,
            employmentType: req.body.employmentDetails.employmentType,
            experience: req.body.employmentDetails.experience,
            team: req.body.employmentDetails.team, // Optional
        },
        summary: req.body.summary,
        salary: {
            payRate: req.body.salary.payRate,
            rangeFrom: req.body.salary.rangeFrom,
            rangeTo: req.body.salary.rangeTo,
        },
    });

    try {
        const newRecruitment = await recruitment.save();
        res.status(201).json(newRecruitment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT to update a recruitment entry by ID
router.put('/:id', async (req, res) => {
    try {
        const recruitment = await Recruitment.findById(req.params.id);
        if (!recruitment) return res.status(404).json({ message: 'Recruitment entry not found' });

        // Update fields
        recruitment.jobTitle = req.body.jobTitle || recruitment.jobTitle;
        recruitment.industry = req.body.industry || recruitment.industry;
        recruitment.location.city = req.body.location?.city || recruitment.location.city;
        recruitment.location.country = req.body.location?.country || recruitment.location.country;
        recruitment.team = req.body.team || recruitment.team;
        recruitment.employmentDetails.jobType = req.body.employmentDetails?.jobType || recruitment.employmentDetails.jobType;
        recruitment.employmentDetails.employmentType = req.body.employmentDetails?.employmentType || recruitment.employmentDetails.employmentType;
        recruitment.employmentDetails.experience = req.body.employmentDetails?.experience || recruitment.employmentDetails.experience;
        recruitment.employmentDetails.team = req.body.employmentDetails?.team || recruitment.employmentDetails.team;
        recruitment.summary = req.body.summary || recruitment.summary;
        recruitment.salary.payRate = req.body.salary?.payRate || recruitment.salary.payRate;
        recruitment.salary.rangeFrom = req.body.salary?.rangeFrom || recruitment.salary.rangeFrom;
        recruitment.salary.rangeTo = req.body.salary?.rangeTo || recruitment.salary.rangeTo;

        const updatedRecruitment = await recruitment.save();
        res.status(200).json(updatedRecruitment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a recruitment entry by ID
router.delete('/:id', async (req, res) => {
    try {
        const recruitment = await Recruitment.findById(req.params.id);
        if (!recruitment) return res.status(404).json({ message: 'Recruitment entry not found' });

        await recruitment.remove();
        res.status(200).json({ message: 'Recruitment entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

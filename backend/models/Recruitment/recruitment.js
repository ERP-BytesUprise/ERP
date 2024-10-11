// backend/models/Recruitment/recruitment.js
const mongoose = require('mongoose');

const recruitmentSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true }, // Job Title
    industry: { type: String, required: true }, // Industry
    location: {
        city: { type: String, required: true }, // City
        country: { type: String, required: true }, // Country
    },
    team: { type: String }, // Team (optional)
    employmentDetails: {
        jobType: { type: String, required: true }, // Job Type (e.g., Full-Time, Part-Time)
        employmentType: { type: String, required: true }, // Employment Type (e.g., Permanent, Contract)
        experience: { type: String, required: true }, // Experience (e.g., 2-5 years)
        team: { type: String }, // Team (optional)
    },
    summary: { type: String, required: true }, // Job Summary
    salary: {
        payRate: { type: String, required: true }, // Pay Rate (e.g., USD)
        rangeFrom: { type: Number, required: true }, // Salary Range From
        rangeTo: { type: Number, required: true }, // Salary Range To
    },
    createdAt: { type: Date, default: Date.now }, // Date the recruitment entry was created
});

const Recruitment = mongoose.model('Recruitment', recruitmentSchema);

module.exports = Recruitment;

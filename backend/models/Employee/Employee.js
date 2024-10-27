const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    employmentType: { type: String, enum: ['Full Time', 'Part Time'], required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
    checkIn: { type: String },
    checkOut: { type: String },
    workType: { type: String, enum: ['Remote', 'Onsite'], required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

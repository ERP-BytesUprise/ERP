const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now }, // Date the employee record was created
    employeeId: { type: String, required: true, unique: true }, // Employee ID field (e.g. A110001)
    name: { type: String, required: true }, // Employee name (e.g. Jay Vasani)
    role: { type: String, required: true }, // Position/Role (e.g. Product Designer)
    employmentType: { type: String, enum: ['Full Time', 'Part Time'], required: true }, // Full Time or Part Time
    status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true }, // Current status (e.g. Present)
    checkIn: { type: String }, // Check-in time (e.g. "09:00 AM")
    checkOut: { type: String }, // Check-out time (e.g. "05:00 PM")
    workType: { type: String, enum: ['Remote', 'Onsite'], required: true } // Work type (Remote or Onsite)
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

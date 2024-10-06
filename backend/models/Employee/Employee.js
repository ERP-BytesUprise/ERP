const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true }, // Employee ID field (e.g. A110001)
    name: { type: String, required: true }, // Employee name (e.g. Jay Vasani)
    active: { type: Boolean, default: true }, // Whether the employee is active
    position: { type: String, required: true }, // Position/Role (e.g. Product Designer)
    photo: { type: String }, // URL of the employee's photo
    email: { type: String, required: true, unique: true }, // Unique email address
    location: { type: String }, // Employee location (e.g. Remote)
    contact: { type: String }, // Contact number
    birthday: { type: Date }, // Date of birth
    date: { type: Date, default: Date.now }, // Date the employee record was created
    employmentType: { type: String, enum: ['Full Time', 'Part Time'], required: true }, // Full Time or Part Time
    status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true }, // Current status (e.g. Present)
    checkIn: { type: String }, // Check-in time (e.g. "09:00 AM")
    checkOut: { type: String }, // Check-out time (e.g. "05:00 PM")
    workType: { type: String, enum: ['Remote', 'Onsite'], required: true } // Work type (Remote or Onsite)
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

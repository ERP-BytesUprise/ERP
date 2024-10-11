// backend/models/Directory/directory.js
const mongoose = require('mongoose');

const directorySchema = new mongoose.Schema({
    employeeId: { 
        type: mongoose.Schema.Types.ObjectId, // Reference to Employee
        required: true, 
        ref: 'Employee' 
    },
    status: { 
        type: String,  
        enum: ['Active', 'Inactive'], 
        required: true 
    },
    photo: { 
        type: String, // Photo URL
    },
    photo_public_id: { 
        type: String, // Cloudinary public ID
    },
    email: { 
        type: String, 
        required: true 
    }, // Email
    location: { type: String }, // Location
    contact: { type: String }, // Contact number
    birthday: { type: Date }, // Birthday
});

const Directory = mongoose.model('Directory', directorySchema);

module.exports = Directory;

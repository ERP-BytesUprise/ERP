const mongoose = require('mongoose');

const directorySchema = new mongoose.Schema({
    employeeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Employee' 
    },
    status: { 
        type: String,  
        enum: ['Active', 'Inactive'], 
        required: true 
    },
    photo: { 
        type: String, 
        default: 'https://res.cloudinary.com/dtfmiz4xb/image/upload/v1729132696/profile_photo_enxxia.avif' // Default image URL
    },
    photo_public_id: { 
        type: String, 
    },
    email: { 
        type: String, 
        required: true 
    },
    location: { type: String },
    contact: { type: String },
    birthday: { type: Date },
});

const Directory = mongoose.model('Directory', directorySchema);

module.exports = Directory;

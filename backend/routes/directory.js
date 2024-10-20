const express = require('express');
const router = express.Router();
const Directory = require('../models/Directory/directory'); // Import Directory model
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary'); // Import Cloudinary configuration

// Configure Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'directory_photos', // Folder name in Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: [{ width: 500, height: 500, crop: 'limit' }], // Optional transformations
    },
});

// Initialize Multer with Cloudinary Storage
const upload = multer({ storage });

// Default photo URL
const defaultPhotoUrl = 'https://res.cloudinary.com/dtfmiz4xb/image/upload/v1729132696/profile_photo_enxxia.avif'; // Replace with actual default image URL

// GET all directory entries
router.get('/', async (req, res) => {
    try {
        const directories = await Directory.find().populate('employeeId', 'name email'); // Populate employeeId with name and email
        res.status(200).json(directories);
    } catch (error) {
        console.error('GET /directory error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET a specific directory entry by ID
router.get('/:id', async (req, res) => {
    try {
        const directory = await Directory.findById(req.params.id).populate('employeeId', 'name email');
        if (!directory) return res.status(404).json({ message: 'Directory entry not found' });
        res.status(200).json(directory);
    } catch (error) {
        console.error(`GET /directory/${req.params.id} error:`, error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST a new directory entry with photo upload or default image
router.post('/', upload.single('photo'), async (req, res) => {
    try {
        const { employeeId, status, email, location, contact, birthday } = req.body;
        let photoUrl = defaultPhotoUrl; // Default image URL
        let photoPublicId = ''; // Leave public ID blank for default image

        // If a photo is uploaded, replace the default with Cloudinary URL
        if (req.file) {
            photoUrl = req.file.path; // Cloudinary returns the URL in `path`
            photoPublicId = req.file.filename; // Cloudinary public ID
            console.log('Uploaded photo URL:', photoUrl);
            console.log('Uploaded photo public_id:', photoPublicId);
        }

        const directory = new Directory({
            employeeId,
            status,
            photo: photoUrl,
            photo_public_id: photoPublicId,
            email,
            location,
            contact,
            birthday,
        });

        const newDirectory = await directory.save();
        res.status(201).json(newDirectory);
    } catch (error) {
        console.error('POST /directory error:', error);
        res.status(400).json({ message: 'Bad Request' });
    }
});

// PUT update a directory entry (including photo update or using default image)
router.put('/:id', upload.single('photo'), async (req, res) => {
    try {
        const directory = await Directory.findById(req.params.id);
        if (!directory) return res.status(404).json({ message: 'Directory entry not found' });

        const { employeeId, status, email, location, contact, birthday } = req.body;

        if (employeeId) directory.employeeId = employeeId;
        if (status) directory.status = status;
        if (email) directory.email = email;
        if (location) directory.location = location;
        if (contact) directory.contact = contact;
        if (birthday) directory.birthday = birthday;

        // Handle photo updates
        if (req.file) {
            // Delete old photo from Cloudinary if exists
            if (directory.photo_public_id) {
                await cloudinary.uploader.destroy(directory.photo_public_id);
                console.log('Deleted old photo with public_id:', directory.photo_public_id);
            }

            // Update with new photo URL and public_id
            directory.photo = req.file.path; // New photo URL
            directory.photo_public_id = req.file.filename; // New photo public_id
            console.log('Uploaded new photo URL:', directory.photo);
            console.log('Uploaded new photo public_id:', directory.photo_public_id);
        } else if (!directory.photo) {
            // If no new photo is uploaded and no existing photo, use the default image
            directory.photo = defaultPhotoUrl;
        }

        const updatedDirectory = await directory.save();
        res.status(200).json(updatedDirectory);
    } catch (error) {
        console.error(`PUT /directory/${req.params.id} error:`, error);
        res.status(400).json({ message: 'Bad Request' });
    }
});

// DELETE a directory entry
router.delete('/:id', async (req, res) => {
    try {
        const directory = await Directory.findById(req.params.id);
        if (!directory) return res.status(404).json({ message: 'Directory entry not found' });

        // Delete the image from Cloudinary if exists
        if (directory.photo_public_id) {
            await cloudinary.uploader.destroy(directory.photo_public_id);
            console.log('Deleted photo with public_id:', directory.photo_public_id);
        }

        await directory.remove();
        res.status(200).json({ message: 'Directory entry deleted successfully' });
    } catch (error) {
        console.error(`DELETE /directory/${req.params.id} error:`, error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

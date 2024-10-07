const express = require('express');
const User = require('../models/Login/user');
const jwt = require('jsonwebtoken');

const router = express.Router();
const secretKey = process.env.JWT_SECRET || 'your_jwt_secret';

// Register user
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = new User({ username, password, email });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '5h' });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

// Logout (clear token on client-side)
router.post('/logout', (req, res) => {
  res.send('Logged out successfully');
});

module.exports = router;

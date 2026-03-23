import express from 'express';
import Application from '../models/Application.js';
import { verifyToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Submit application or contact inquiry (Public)
router.post('/', async (req, res) => {
  const { jobId, name, phone, email, message, type, inquiryType, passportNumber } = req.body;
  try {
    const newApplication = new Application({
      jobId: jobId || null,
      type: type || 'job_application',
      inquiryType,
      name,
      phone,
      email,
      passportNumber,
      message
    });
    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all applications (Admin Only)
router.get('/', verifyToken, isAdmin, async (req, res) => {
  try {
    const applications = await Application.find().populate('jobId', 'caption').sort({ submittedAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

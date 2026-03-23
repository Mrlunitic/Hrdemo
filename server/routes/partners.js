import express from 'express';
import Partner from '../models/Partner.js';
import { verifyToken, isAdmin } from '../middleware/auth.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Get all partners (Public)
router.get('/', async (req, res) => {
  try {
    const partners = await Partner.find().sort({ order: 1, createdAt: -1 });
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create partner (Admin Only)
router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
  const { name, type, country, order } = req.body;
  try {
    let imageUrl = '';
    let imagePublicId = '';

    if (req.file) {
      if (process.env.CLOUDINARY_CLOUD_NAME) {
         const result = await cloudinary.uploader.upload(req.file.path, {
           folder: 'partners'
         });
         imageUrl = result.secure_url;
         imagePublicId = result.public_id;
      } else {
         const host = req.get('host');
         imageUrl = `${req.protocol}://${host}/uploads/${req.file.filename}`;
      }
    }

    const newPartner = new Partner({
      name,
      type,
      country,
      order: order ? parseInt(order) : 0,
      imageUrl,
      imagePublicId
    });

    await newPartner.save();
    res.status(201).json(newPartner);
  } catch (error) {
    console.error('Error creating partner:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete partner (Admin Only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ message: 'Partner not found' });

    // if (partner.imagePublicId) {
    //   await cloudinary.uploader.destroy(partner.imagePublicId);
    // }

    await Partner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Partner deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

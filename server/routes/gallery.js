import express from 'express';
import Gallery from '../models/Gallery.js';
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

// Get all gallery items (Public)
router.get('/', async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create gallery item (Admin Only)
router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
  const { caption } = req.body;
  try {
    let imageUrl = '';
    let imagePublicId = '';

    if (req.file) {
      if (process.env.CLOUDINARY_CLOUD_NAME) {
         const result = await cloudinary.uploader.upload(req.file.path, {
           folder: 'gallery'
         });
         imageUrl = result.secure_url;
         imagePublicId = result.public_id;
      } else {
         const host = req.get('host');
         imageUrl = `${req.protocol}://${host}/uploads/${req.file.filename}`;
      }
    }

    const newItem = new Gallery({
      caption,
      imageUrl,
      imagePublicId
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete gallery item (Admin Only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    // if (item.imagePublicId) {
    //   await cloudinary.uploader.destroy(item.imagePublicId);
    // }

    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

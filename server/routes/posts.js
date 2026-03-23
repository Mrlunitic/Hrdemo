import express from 'express';
import Post from '../models/Post.js';
import { verifyToken, isAdmin } from '../middleware/auth.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

// Multer setup for temporary storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Get all posts (Public)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create post (Admin Only)
router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
  const { caption, category, country, region, candidatesNeeded } = req.body;
  try {
    let imageUrl = '';
    let imagePublicId = '';

    if (req.file) {
      if (process.env.CLOUDINARY_CLOUD_NAME) {
         const result = await cloudinary.uploader.upload(req.file.path, {
           folder: 'job_posts'
         });
         imageUrl = result.secure_url;
         imagePublicId = result.public_id;
      } else {
         // Local fallback URL
         const host = req.get('host');
         imageUrl = `${req.protocol}://${host}/uploads/${req.file.filename}`;
      }
    }

    const newPost = new Post({
      caption,
      imageUrl,
      imagePublicId,
      category,
      country,
      region,
      candidatesNeeded
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update post (Admin Only)
router.put('/:id', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
  const { caption, category, country, region, candidatesNeeded } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    let imageUrl = post.imageUrl;
    let imagePublicId = post.imagePublicId;

    if (req.file) {
      if (process.env.CLOUDINARY_CLOUD_NAME) {
         // Upload new image to Cloudinary
         const result = await cloudinary.uploader.upload(req.file.path, {
           folder: 'job_posts'
         });
         imageUrl = result.secure_url;
         imagePublicId = result.public_id;
      } else {
         // Local fallback URL
         const host = req.get('host');
         imageUrl = `${req.protocol}://${host}/uploads/${req.file.filename}`;
      }
    }

    post.caption = caption || post.caption;
    post.category = category || post.category;
    post.country = country || post.country;
    post.region = region || post.region;
    post.candidatesNeeded = candidatesNeeded !== undefined ? candidatesNeeded : post.candidatesNeeded;
    post.imageUrl = imageUrl;
    post.imagePublicId = imagePublicId;
    post.updatedAt = Date.now();

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete post (Admin Only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // if (post.imagePublicId) {
    //   await cloudinary.uploader.destroy(post.imagePublicId);
    // }

    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

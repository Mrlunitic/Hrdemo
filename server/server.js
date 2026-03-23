import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import galleryRoutes from './routes/gallery.js';
import applicationRoutes from './routes/applications.js';
import partnerRoutes from './routes/partners.js';

// Models
import User from './models/User.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/human_potential_hub';
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected');
    
    // Seed Admin User if not exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@kangaroohr.com';
    const adminExists = await User.findOne({ email: adminEmail });
    if (!adminExists) {
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const adminUser = new User({
        email: adminEmail,
        password: adminPassword,
        role: 'admin'
      });
      await adminUser.save();
      console.log('Admin user seeded');
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/partners', partnerRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

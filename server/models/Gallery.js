import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  caption: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imagePublicId: { type: String }, // For Cloudinary deletion
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Gallery', gallerySchema);

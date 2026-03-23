import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imagePublicId: { type: String }, // For Cloudinary deletion
  category: { type: String },
  country: { type: String },
  region: { type: String },
  candidatesNeeded: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Post', postSchema);

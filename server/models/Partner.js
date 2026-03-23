import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['client', 'company'], default: 'client' },
  country: { type: String }, // For clients
  imageUrl: { type: String, required: true },
  imagePublicId: { type: String }, // For Cloudinary deletion
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Partner', partnerSchema);

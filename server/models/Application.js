import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: false },
  type: { type: String, enum: ['job_application', 'contact_inquiry'], default: 'job_application' },
  inquiryType: { type: String },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  passportNumber: { type: String },
  message: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Application', applicationSchema);

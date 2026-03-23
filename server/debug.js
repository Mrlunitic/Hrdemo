import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';

dotenv.config();

console.log('--- Environment Check ---');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('JWT_SECRET (set?):', !!process.env.JWT_SECRET);
console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
console.log('ADMIN_PASSWORD (set?):', !!process.env.ADMIN_PASSWORD);

async function checkDB() {
  try {
    console.log('\n--- MongoDB Connection Check ---');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/human_potential_hub');
    console.log('Connected correctly!');
    
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@kangaroohr.com';
    const user = await User.findOne({ email: adminEmail });
    if (user) {
      console.log('Admin user found in DB:', user.email);
      console.log('Admin role:', user.role);
    } else {
      console.log('Admin user NOT found in DB');
    }
    
    process.exit(0);
  } catch (err) {
    console.error('Connection/Query error:', err);
    process.exit(1);
  }
}

checkDB();

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import fs from 'fs';

dotenv.config();

const results = {
  env: {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET_SET: !!process.env.JWT_SECRET,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD_SET: !!process.env.ADMIN_PASSWORD
  },
  db: {}
};

async function checkDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/human_potential_hub');
    results.db.connected = true;
    
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@kangaroohr.com';
    const user = await User.findOne({ email: adminEmail });
    if (user) {
      results.db.adminFound = true;
      results.db.adminEmail = user.email;
      results.db.adminRole = user.role;
      results.db.passwordHashed = user.password.startsWith('$2'); // bcrypt hashes start with $2
    } else {
      results.db.adminFound = false;
    }
  } catch (err) {
    results.db.error = err.message;
  } finally {
    fs.writeFileSync('debug_results.json', JSON.stringify(results, null, 2));
    process.exit(0);
  }
}

checkDB();

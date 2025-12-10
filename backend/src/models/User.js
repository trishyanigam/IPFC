// backend/src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // firebase uid
  name: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['applicant', 'admin'], default: 'applicant' },
  status: { type: String, enum: ['active', 'blocked'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

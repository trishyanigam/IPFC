// backend/src/models/Document.js
const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  ownerUid: { type: String, required: true },
  ownerEmail: { type: String },
  name: { type: String },
  category: { type: String },
  filename: String,
  url: String,
  mimeType: String,
  size: Number,
  status: { type: String, enum: ['pending','verified','rejected'], default: 'pending' },
  uploadedAt: { type: Date, default: Date.now },
  reviewedAt: Date,
  reviewerUid: String,
  reviewerNotes: String,
});

module.exports = mongoose.model('Document', DocumentSchema);

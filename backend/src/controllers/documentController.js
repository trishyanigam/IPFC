// backend/src/controllers/documentController.js
const Document = require('../models/Document');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// multer config -> local storage in /src/uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dest = path.join(process.cwd(), 'uploads');
//     if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
//     cb(null, dest);
//   },
//   filename: (req, file, cb) => {
//     const name = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
//     cb(null, name);
//   },
// });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.resolve('uploads');  // ALWAYS backend/uploads
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const safe = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
    cb(null, safe);
  }
});


exports.uploadMiddleware = multer({ storage });

exports.uploadDocument = async (req, res, next) => {
  try {
    // file uploaded by multer
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file' });

    const doc = new Document({
      ownerUid: req.user.uid,
      ownerEmail: req.user.email,
      name: req.body.name || file.originalname,
      category: req.body.category || 'other',
      filename: file.filename,
      url: `/uploads/${file.filename}`,
      mimeType: file.mimetype,
      size: file.size,
    });

    await doc.save();
    res.status(201).json(doc);
  } catch (err) { next(err); }
};

// GET /api/documents/my
exports.getMyDocuments = async (req, res, next) => {
  try {
    const docs = await Document.find({ ownerUid: req.user.uid }).sort({ uploadedAt: -1 });
    res.json(docs);
  } catch (err) { next(err); }
};

// GET /api/documents/all (admin)
exports.getAllDocuments = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    const docs = await Document.find().sort({ uploadedAt: -1 });
    res.json(docs);
  } catch (err) { next(err); }
};

// PATCH verify
exports.verifyDocument = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    const { id } = req.params;
    const { action, reviewerNotes } = req.body; // action = verify | reject
    const doc = await Document.findById(id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    doc.status = action === 'verify' ? 'verified' : 'rejected';
    doc.reviewedAt = new Date();
    doc.reviewerUid = req.user.uid;
    doc.reviewerNotes = reviewerNotes || '';
    await doc.save();
    res.json(doc);
  } catch (err) { next(err); }
};

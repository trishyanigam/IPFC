// // backend/src/controllers/documentController.js
// const Document = require('../models/Document');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // multer config -> local storage in /src/uploads
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     const dest = path.join(process.cwd(), 'uploads');
// //     if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
// //     cb(null, dest);
// //   },
// //   filename: (req, file, cb) => {
// //     const name = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
// //     cb(null, name);
// //   },
// // });
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = path.resolve('uploads');  // ALWAYS backend/uploads
//     if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const safe = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
//     cb(null, safe);
//   }
// });


// exports.uploadMiddleware = multer({ storage });

// exports.uploadDocument = async (req, res, next) => {
//   try {
//     // file uploaded by multer
//     const file = req.file;
//     if (!file) return res.status(400).json({ error: 'No file' });

//     const doc = new Document({
//       ownerUid: req.user.uid,
//       ownerEmail: req.user.email,
//       name: req.body.name || file.originalname,
//       category: req.body.category || 'other',
//       filename: file.filename,
//       url: `/uploads/${file.filename}`,
//       mimeType: file.mimetype,
//       size: file.size,
//     });

//     await doc.save();
//     res.status(201).json(doc);
//   } catch (err) { next(err); }
// };

// // GET /api/documents/my
// exports.getMyDocuments = async (req, res, next) => {
//   try {
//     const docs = await Document.find({ ownerUid: req.user.uid }).sort({ uploadedAt: -1 });
//     res.json(docs);
//   } catch (err) { next(err); }
// };

// // GET /api/documents/all (admin)
// exports.getAllDocuments = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const docs = await Document.find().sort({ uploadedAt: -1 });
//     res.json(docs);
//   } catch (err) { next(err); }
// };

// // PATCH verify
// exports.verifyDocument = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const { id } = req.params;
//     const { action, reviewerNotes } = req.body; // action = verify | reject
//     const doc = await Document.findById(id);
//     if (!doc) return res.status(404).json({ error: 'Not found' });
//     doc.status = action === 'verify' ? 'verified' : 'rejected';
//     doc.reviewedAt = new Date();
//     doc.reviewerUid = req.user.uid;
//     doc.reviewerNotes = reviewerNotes || '';
//     await doc.save();
//     res.json(doc);
//   } catch (err) { next(err); }
// };

// // GET /api/documents/download/:id
// exports.downloadDocument = async (req, res) => {
//   try {
//     const doc = await Document.findById(req.params.id);
//     if (!doc) {
//       return res.status(404).json({ error: "Document not found" });
//     }

//     // Absolute path to file
//     const filePath = path.resolve("uploads", doc.filename);

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ error: "File missing on server" });
//     }

//     // ✅ Correct headers + streaming
//     res.download(filePath, doc.filename);
//   } catch (err) {
//     console.error("Download error:", err);
//     res.status(500).json({ error: "Failed to download file" });
//   }
// };


const Document = require("../models/Document");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

/* -------------------- MULTER CONFIG -------------------- */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const safeName = Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, safeName);
  },
});

exports.uploadMiddleware = multer({ storage });

/* -------------------- UPLOAD -------------------- */
exports.uploadDocument = async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: "No file uploaded" });

  const doc = await Document.create({
    ownerUid: req.user.uid,
    ownerEmail: req.user.email,
    name: req.body.name || file.originalname,
    category: req.body.category || "other",
    filename: file.filename,
    mimeType: file.mimetype,
    size: file.size,
    status: "pending",
  });

  res.status(201).json(doc);
};

/* -------------------- GET USER DOCS -------------------- */
exports.getMyDocuments = async (req, res) => {
  const docs = await Document.find({ ownerUid: req.user.uid }).sort({
    createdAt: -1,
  });
  res.json(docs);
};

/* -------------------- GET ALL DOCS (ADMIN) -------------------- */
exports.getAllDocuments = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const docs = await Document.find().sort({ createdAt: -1 });
  res.json(docs);
};

/* -------------------- VERIFY / REJECT -------------------- */
exports.verifyDocument = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { action } = req.body; // verify | reject
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: "Document not found" });

  doc.status = action === "verify" ? "verified" : "rejected";
  doc.reviewedAt = new Date();
  doc.reviewerUid = req.user.uid;

  await doc.save();
  res.json(doc);
};

/* -------------------- SECURE VIEW (INLINE PDF) -------------------- */
exports.downloadDocument = async (req, res, next) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "Document not found" });

    // security: only owner or admin
    if (
      req.user.role !== "admin" &&
      doc.ownerUid !== req.user.uid
    ) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const filePath = path.join(
      process.cwd(),
      "uploads",
      doc.filename
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File missing on server" });
    }

    res.setHeader("Content-Type", doc.mimeType);
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${doc.filename}"`
    );

    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    next(err);
  }
};
/* -------------------- VIEW DOCUMENT (INLINE) -------------------- */
exports.viewDocument = async (req, res) => {
  try {
    const { id } = req.params;

    const doc = await Document.findById(id);
    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    // ✅ Allow:
    // - admin → any document
    // - applicant → only their own document
    if (
      req.user.role !== "admin" &&
      doc.ownerUid !== req.user.uid
    ) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const filePath = path.join(process.cwd(), "uploads", doc.filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found on server" });
    }

    res.setHeader("Content-Type", doc.mimeType);
    res.setHeader("Content-Disposition", "inline");

    fs.createReadStream(filePath).pipe(res);

  } catch (err) {
    console.error("View document error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
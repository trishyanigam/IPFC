// // backend/src/routes/documentRoutes.js
// const router = require('express').Router();
// const auth = require('../middleware/authMiddleware');
// const ctrl = require('../controllers/documentController');
// const Document = require('../models/Document');
// const { downloadDocument } = require("../controllers/documentController");


// // multer middleware exported from controller
// router.post('/upload', auth, ctrl.uploadMiddleware.single('file'), ctrl.uploadDocument);
// router.get('/my', auth, ctrl.getMyDocuments);
// router.get('/all', auth, ctrl.getAllDocuments); // admin
// router.patch('/:id/review', auth, ctrl.verifyDocument); // body: { action: 'verify'|'reject' }
// router.get("/download/:id", authMiddleware, downloadDocument);

// // GET /api/documents/stats
// router.get("/stats", auth, async (req, res) => {
//   try {
//     const docs = await Document.find({ uploadedBy: req.user.uid });

//     const stats = {
//       total: docs.length,
//       pending: docs.filter(d => d.status === "pending").length,
//       verified: docs.filter(d => d.status === "verified").length,
//       rejected: docs.filter(d => d.status === "rejected").length,
//     };

//     res.json(stats);
//   } catch (err) {
//     console.error("Document stats error:", err);
//     res.status(500).json({ error: "Failed to load document stats" });
//   }
// });


// module.exports = router;







// backend/src/routes/documentRoutes.js
// const express = require("express");
// const router = express.Router();

// const authMiddleware = require("../middleware/authMiddleware"); // ✅ FIX
// const {
//   uploadMiddleware,
//   uploadDocument,
//   getMyDocuments,
//   getAllDocuments,
//   verifyDocument,
//   downloadDocument, // ✅ make sure this exists in controller
// } = require("../controllers/documentController");

// /* ---------------- UPLOAD ---------------- */
// router.post(
//   "/upload",
//   authMiddleware,
//   uploadMiddleware.single("file"),
//   uploadDocument
// );

// /* ---------------- FETCH ---------------- */
// router.get("/my", authMiddleware, getMyDocuments);
// router.get("/all", authMiddleware, getAllDocuments);

// /* ---------------- VERIFY (ADMIN) ---------------- */
// router.patch("/:id/verify", authMiddleware, verifyDocument);

// /* ---------------- DOWNLOAD (PDF / FILE) ---------------- */
// router.get("/download/:id", authMiddleware, downloadDocument);

// module.exports = router;



// const express = require("express");
// const router = express.Router();

// const authMiddleware = require("../middleware/authMiddleware");
// const {
//   uploadMiddleware,
//   uploadDocument,
//   getMyDocuments,
//   getAllDocuments,
//   verifyDocument,
//   downloadDocument,
// } = require("../controllers/documentController");

// router.post("/upload", authMiddleware, uploadMiddleware.single("file"), uploadDocument);
// router.get("/my", authMiddleware, getMyDocuments);
// router.get("/all", authMiddleware, getAllDocuments);
// router.patch("/:id/verify", authMiddleware, verifyDocument);
// router.get("/download/:id", authMiddleware, downloadDocument);

// module.exports = router;


const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  uploadMiddleware,
  uploadDocument,
  getMyDocuments,
  getAllDocuments,
  verifyDocument,
  downloadDocument,
  viewDocument,
 // ✅ IMPORTANT
} = require("../controllers/documentController");

router.post(
  "/upload",
  authMiddleware,
  uploadMiddleware.single("file"),
  uploadDocument
);

router.get("/my", authMiddleware, getMyDocuments);
router.get("/all", authMiddleware, getAllDocuments);
router.patch("/verify/:id", authMiddleware, verifyDocument);

// ✅ THIS ROUTE WAS MISSING / WRONG EARLIER
router.get("/download/:id", authMiddleware, downloadDocument);
router.get("/view/:id", authMiddleware, viewDocument);



module.exports = router;


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
// router.patch("/verify/:id", authMiddleware, verifyDocument);
router.patch("/:id/review", authMiddleware, verifyDocument);


// ✅ THIS ROUTE WAS MISSING / WRONG EARLIER
router.get("/download/:id", authMiddleware, downloadDocument);
router.get("/view/:id", authMiddleware, viewDocument);



module.exports = router;


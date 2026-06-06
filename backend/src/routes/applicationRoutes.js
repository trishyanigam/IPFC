const express = require("express");
const router = express.Router();

// ✅ Correct middleware import
const auth = require("../middleware/authMiddleware");

// ✅ Correct controller import
const ctrl = require("../controllers/applicationController");

/* ===================== APPLICATION ROUTES ===================== */

// Submit new application
router.post("/submit", auth, ctrl.submitApplication);

// Get logged-in user's applications
router.get("/my", auth, ctrl.getMyApplications);

// 🔥 Recent activity for applicant dashboard
router.get("/activity", auth, ctrl.getMyActivity);

// Application stats (used in dashboards)
router.get("/stats", auth, ctrl.getStats);

// Get all applications (ADMIN only – you can restrict later)
router.get("/all", auth, ctrl.getAllApplications);

// ⚠️ Dynamic route MUST be LAST
// Update application status (admin/reviewer)
router.patch("/:id/status", auth, ctrl.updateStatus);

module.exports = router;

// // backend/src/routes/applicationRoutes.js
// const router = require('express').Router();
// const auth = require('../middleware/authMiddleware');
// const ctrl = require('../controllers/applicationController');

// router.post('/submit', auth, ctrl.submitApplication);
// router.get("/activity", auth, ctrl.getMyActivity);

// router.get('/my', auth, ctrl.getMyApplications);
// router.get('/all', auth, ctrl.getAllApplications); // admin
// router.patch('/:id/status', auth, ctrl.updateStatus);
// router.get('/stats', auth, ctrl.getStats);

// // GET /api/applications/activity
// // GET /api/applications/activity
// // GET /api/applications/activity

// module.exports = router;




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

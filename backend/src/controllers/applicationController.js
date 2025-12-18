// // backend/src/controllers/applicationController.js
// const Application = require('../models/Application');
// const Notification = require("../models/Notification");


// // POST /api/applications/submit
// exports.submitApplication = async (req, res, next) => {
//   try {
//     const { title, ipType, description, files } = req.body;
//     if (!title || !ipType) return res.status(400).json({ error: 'Missing fields' });

//     const app = new Application({
//       applicantUid: req.user.uid,
//       applicantEmail: req.user.email,
//       title, ipType, description,
//       files: files || [],
//     });

//     await app.save();
//     res.status(201).json(app);
//   } catch (err) {
//     next(err);
//   }
// };

// // GET /api/applications/my
// exports.getMyApplications = async (req, res, next) => {
//   try {
//     const apps = await Application.find({ applicantUid: req.user.uid }).sort({ createdAt: -1 });
//     res.json(apps);
//   } catch (err) { next(err); }
// };

// // GET /api/applications/all (admin)
// exports.getAllApplications = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const apps = await Application.find().sort({ createdAt: -1 });
//     res.json(apps);
//   } catch (err) { next(err); }
// };

// // PATCH /api/applications/:id/status
// exports.updateStatus = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const { status, adminNotes } = req.body;
//     const app = await Application.findById(req.params.id);
//     if (!app) return res.status(404).json({ error: 'Not found' });
//     app.status = status || app.status;
//     if (adminNotes) app.adminNotes = adminNotes;
//     app.updatedAt = new Date();
//     await app.save();
//     res.json(app);
//   } catch (err) { next(err); }
// };

// // GET /api/applications/stats (admin)
// exports.getStats = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const total = await Application.countDocuments();
//     const pending = await Application.countDocuments({ status: 'pending' });
//     const approved = await Application.countDocuments({ status: 'approved' });
//     res.json({ total, pending, approved });
//   } catch (err) { next(err); }
// };


// backend/src/controllers/applicationController.js
const Application = require('../models/Application');
const Notification = require("../models/Notification");

//
// ⭐ SUBMIT NEW APPLICATION (User)
// POST /api/applications/submit
//
exports.submitApplication = async (req, res, next) => {
  try {
    const { title, ipType, description, files } = req.body;

    if (!title || !ipType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const app = new Application({
      applicantUid: req.user.uid,
      applicantEmail: req.user.email,
      title,
      ipType,
      description,
      files: files || [],
    });

    await app.save();

    res.status(201).json(app);
  } catch (err) {
    next(err);
  }
};


//
// ⭐ GET ALL APPLICATIONS OF LOGGED-IN USER
// GET /api/applications/my
//
exports.getMyApplications = async (req, res, next) => {
  try {
    const apps = await Application.find({
      applicantUid: req.user.uid,
    }).sort({ createdAt: -1 });

    res.json(apps);
  } catch (err) {
    next(err);
  }
};


//
// ⭐ GET ALL APPLICATIONS (ADMIN)
// GET /api/applications/all
//
exports.getAllApplications = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ error: 'Forbidden' });

    const apps = await Application.find().sort({ createdAt: -1 });

    res.json(apps);
  } catch (err) {
    next(err);
  }
};


//
// ⭐ UPDATE APPLICATION STATUS (ADMIN)
// PATCH /api/applications/:id/status
// Creates a notification for applicant when status updates
//
exports.updateStatus = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ error: 'Forbidden' });

    const { status, adminNotes } = req.body;

    const app = await Application.findById(req.params.id);
    if (!app)
      return res.status(404).json({ error: 'Application not found' });

    // Update fields
    if (status) app.status = status;
    if (adminNotes) app.adminNotes = adminNotes;
    app.updatedAt = new Date();

    await app.save();

    // ⭐ CREATE AUTOMATIC NOTIFICATION FOR APPLICANT ⭐
    await Notification.create({
      userUid: app.applicantUid,
      message: `Your application "${app.title}" is now ${app.status}.`,
      read: false,
    });

    res.json(app);

  } catch (err) {
    next(err);
  }
};


//
// ⭐ ADMIN DASHBOARD BASIC STATS
// GET /api/applications/stats
//
exports.getStats = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ error: 'Forbidden' });

    const total = await Application.countDocuments();
    const pending = await Application.countDocuments({ status: 'pending' });
    const approved = await Application.countDocuments({ status: 'approved' });
    const rejected = await Application.countDocuments({ status: 'rejected' });

    res.json({ total, pending, approved, rejected });
  } catch (err) {
    next(err);
  }
};


exports.getMyActivity = async (req, res) => {
  try {
    const apps = await Application.find({ applicantUid: req.user.uid })
      .sort({ updatedAt: -1 })
      .limit(5);

    const activity = apps.map(app => ({
      text: `${app.title} is ${app.status}`,
      time: app.updatedAt || app.createdAt
    }));

    res.json(activity);
  } catch (err) {
    console.error("Activity error:", err);
    res.status(500).json({ error: "Failed to load activity" });
  }
};

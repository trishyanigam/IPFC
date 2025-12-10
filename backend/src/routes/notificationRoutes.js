// // backend/src/routes/notificationRoutes.js
// const router = require('express').Router();
// const auth = require('../middleware/authMiddleware');
// const ctrl = require('../controllers/notificationController');

// router.get('/my', auth, ctrl.getMyNotifications);
// router.patch('/:id/toggle-read', auth, ctrl.toggleRead);
// router.patch('/mark-all-read', auth, ctrl.markAllRead);
// router.delete('/:id', auth, ctrl.deleteNotification);
// router.delete('/clear-all', auth, ctrl.clearAll);

// module.exports = router;


const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  getMyNotifications,
  markAllRead,
  toggleRead,
  deleteNotification,
  clearAll
} = require("../controllers/notificationController");

router.get("/my", auth, getMyNotifications);
router.patch("/mark-all-read", auth, markAllRead);
router.patch("/:id/toggle-read", auth, toggleRead);
router.delete("/:id", auth, deleteNotification);
router.delete("/clear-all", auth, clearAll);

module.exports = router;

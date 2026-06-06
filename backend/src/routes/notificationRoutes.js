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

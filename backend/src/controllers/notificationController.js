// // backend/src/controllers/notificationController.js
// const Notification = require('../models/Notification');

// // GET /api/notifications/my
// exports.getMyNotifications = async (req, res, next) => {
//   try {
//     const notifs = await Notification.find({ toUid: req.user.uid }).sort({ createdAt: -1 });
//     res.json(notifs);
//   } catch (err) { next(err); }
// };

// // PATCH /api/notifications/:id/toggle-read
// exports.toggleRead = async (req, res, next) => {
//   try {
//     const n = await Notification.findById(req.params.id);
//     if (!n) return res.status(404).json({ error: 'Not found' });
//     if (n.toUid !== req.user.uid && req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     n.read = !n.read;
//     await n.save();
//     res.json(n);
//   } catch (err) { next(err); }
// };

// // PATCH /api/notifications/mark-all-read
// exports.markAllRead = async (req, res, next) => {
//   try {
//     await Notification.updateMany({ toUid: req.user.uid }, { read: true });
//     res.json({ ok: true });
//   } catch (err) { next(err); }
// };

// // DELETE /api/notifications/:id
// exports.deleteNotification = async (req, res, next) => {
//   try {
//     const n = await Notification.findById(req.params.id);
//     if (!n) return res.status(404).json({ error: 'Not found' });
//     if (n.toUid !== req.user.uid && req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     await n.remove();
//     res.json({ ok: true });
//   } catch (err) { next(err); }
// };

// // DELETE /api/notifications/clear-all
// exports.clearAll = async (req, res, next) => {
//   try {
//     await Notification.deleteMany({ toUid: req.user.uid });
//     res.json({ ok: true });
//   } catch (err) { next(err); }
// };


const Notification = require("../models/Notification");

exports.getMyNotifications = async (req, res) => {
  const list = await Notification.find({ userUid: req.user.uid }).sort({ createdAt: -1 });
  res.json(list);
};

exports.markAllRead = async (req, res) => {
  await Notification.updateMany({ userUid: req.user.uid }, { read: true });
  res.json({ success: true });
};

exports.toggleRead = async (req, res) => {
  const notif = await Notification.findById(req.params.id);
  notif.read = !notif.read;
  await notif.save();
  res.json(notif);
};

exports.deleteNotification = async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

exports.clearAll = async (req, res) => {
  await Notification.deleteMany({ userUid: req.user.uid });
  res.json({ success: true });
};

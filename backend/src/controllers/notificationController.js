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

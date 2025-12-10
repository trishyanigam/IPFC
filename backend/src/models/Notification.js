// // backend/src/models/Notification.js
// const mongoose = require('mongoose');

// const NotificationSchema = new mongoose.Schema({
//   toUid: { type: String, required: true },
//   toEmail: { type: String },
//   message: { type: String, required: true },
//   read: { type: Boolean, default: false },
//   data: { type: Object }, // optional metadata
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Notification', NotificationSchema);


const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userUid: { type: String, required: true },  // Applicant UID
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);

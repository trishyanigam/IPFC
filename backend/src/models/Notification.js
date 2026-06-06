const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userUid: { type: String, required: true },  // Applicant UID
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);

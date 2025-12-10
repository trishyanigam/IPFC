// backend/src/models/SupportTicket.js
const mongoose = require("mongoose");

const SupportTicketSchema = new mongoose.Schema({
  userUid: { type: String, default: null }, // optional if user logged-in
  name: { type: String, required: true },
  email: { type: String, required: true },
  issueType: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ["pending", "in_progress", "resolved"], default: "pending" },
  adminNotes: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SupportTicket", SupportTicketSchema);

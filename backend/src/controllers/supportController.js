// backend/src/controllers/supportController.js
const SupportTicket = require("../models/SupportTicket");

exports.createTicket = async (req, res, next) => {
  try {
    const { name, email, issueType, message } = req.body;
    if (!name || !email || !issueType || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const ticket = new SupportTicket({
      userUid: req.user?.uid || null, // if you have auth middleware
      name,
      email,
      issueType,
      message,
    });

    await ticket.save();

    // optionally: push a notification, email, etc.

    res.status(201).json({ success: true, ticket });
  } catch (err) {
    next(err);
  }
};

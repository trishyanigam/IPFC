// backend/src/routes/supportRoutes.js
const express = require("express");
const router = express.Router();
const { createTicket } = require("../controllers/supportController");

// If you have auth middleware and want only logged users to create tickets, add it here.
// const { protect } = require("../middleware/auth");
// router.post("/create", protect, createTicket);

// For now allow public creation:
router.post("/create", createTicket);

module.exports = router;

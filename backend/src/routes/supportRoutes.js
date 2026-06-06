// backend/src/routes/supportRoutes.js
const express = require("express");
const router = express.Router();
const { createTicket } = require("../controllers/supportController");

router.post("/create", createTicket);

module.exports = router;

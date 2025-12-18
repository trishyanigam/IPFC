// backend/src/routes/authRoutes.js
const router = require("express").Router();
const initFirebaseAdmin = require("../config/firebaseAdmin");
const admin = initFirebaseAdmin();
const User = require("../models/User");

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return res.status(401).json({ error: "No auth token" });
    }

    // verify firebase user
    const decoded = await admin.auth().verifyIdToken(token);

    const { role, fullName } = req.body;

    const existing = await User.findOne({ uid: decoded.uid });
    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }

    const finalRole = role === "admin" ? "admin" : "applicant";

    const user = await User.create({
      uid: decoded.uid,
      email: decoded.email,
      name: fullName,
      role: finalRole,
    });

    res.status(201).json(user);
  } catch (err) {
    console.error("Register error:", err);
    res.status(401).json({ error: "Registration failed" });
  }
});

module.exports = router;

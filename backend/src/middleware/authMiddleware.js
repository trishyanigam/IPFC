const initFirebaseAdmin = require("../config/firebaseAdmin");
const admin = initFirebaseAdmin();
const User = require("../models/User");

module.exports = async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return res.status(401).json({ error: "No auth token provided" });
    }

    // 🔐 Verify Firebase token
    const decoded = await admin.auth().verifyIdToken(token);

    // ✅ Find user by UID OR EMAIL
    let user = await User.findOne({
      $or: [
        { uid: decoded.uid },
        { email: decoded.email },
      ],
    });

    // 🔥 Create ONLY if user truly doesn't exist
    if (!user) {
      user = await User.create({
        uid: decoded.uid,
        email: decoded.email,
        role: "applicant",
        status: "active",
      });
    }

    // ✅ Attach user
    req.user = {
      uid: user.uid,
      email: user.email,
      role: user.role,
      status: user.status,
    };

    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};


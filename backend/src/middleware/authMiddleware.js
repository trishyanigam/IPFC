// // backend/src/middleware/authMiddleware.js
// const initFirebaseAdmin = require('../config/firebaseAdmin');
// const admin = initFirebaseAdmin();

// module.exports = async function authMiddleware(req, res, next) {
//   const authHeader = req.headers.authorization || '';
//   const match = authHeader.match(/^Bearer (.+)$/);
//   if (!match) {
//     return res.status(401).json({ error: 'No token provided' });
//   }
//   const token = match[1];

//   try {
//     const decoded = await admin.auth().verifyIdToken(token);
//     // decoded may contain name; your frontend sets displayName as "FullName__role"
//     const name = decoded.name || decoded.displayName || '';
//     let role = null;
//     if (name && name.includes('__')) {
//       const parts = name.split('__');
//       role = parts[1]?.trim().toLowerCase();
//     }
//     req.user = {
//       uid: decoded.uid,
//       email: decoded.email,
//       name,
//       role,
//     };
//     next();
//   } catch (err) {
//     console.error('Token verify error:', err);
//     return res.status(401).json({ error: 'Invalid token' });
//   }
// };


// backend/src/middleware/authMiddleware.js
const initFirebaseAdmin = require('../config/firebaseAdmin');
const admin = initFirebaseAdmin();

module.exports = async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/^Bearer (.+)$/);

  if (!match) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = match[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);

    const name = decoded.name || decoded.displayName || "";

    // ⭐ FIXED ROLE LOGIC (supports both firebase claims + "__role" format)
    let role = decoded.role || null;

    if (!role && name.includes("__")) {
      role = name.split("__")[1]?.trim().toLowerCase();
    }

    req.user = {
      uid: decoded.uid,
      email: decoded.email,
      name,
      role,
    };

    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

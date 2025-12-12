// // // backend/src/middleware/authMiddleware.js
// // const initFirebaseAdmin = require('../config/firebaseAdmin');
// // const admin = initFirebaseAdmin();

// // module.exports = async function authMiddleware(req, res, next) {
// //   const authHeader = req.headers.authorization || '';
// //   const match = authHeader.match(/^Bearer (.+)$/);
// //   if (!match) {
// //     return res.status(401).json({ error: 'No token provided' });
// //   }
// //   const token = match[1];

// //   try {
// //     const decoded = await admin.auth().verifyIdToken(token);
// //     // decoded may contain name; your frontend sets displayName as "FullName__role"
// //     const name = decoded.name || decoded.displayName || '';
// //     let role = null;
// //     if (name && name.includes('__')) {
// //       const parts = name.split('__');
// //       role = parts[1]?.trim().toLowerCase();
// //     }
// //     req.user = {
// //       uid: decoded.uid,
// //       email: decoded.email,
// //       name,
// //       role,
// //     };
// //     next();
// //   } catch (err) {
// //     console.error('Token verify error:', err);
// //     return res.status(401).json({ error: 'Invalid token' });
// //   }
// // };


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

//     const name = decoded.name || decoded.displayName || "";

//     // ⭐ FIXED ROLE LOGIC (supports both firebase claims + "__role" format)
//     let role = decoded.role || null;

//     if (!role && name.includes("__")) {
//       role = name.split("__")[1]?.trim().toLowerCase();
//     }

//     req.user = {
//       uid: decoded.uid,
//       email: decoded.email,
//       name,
//       role,
//     };

//     next();
//   } catch (err) {
//     console.error("Token verification error:", err);
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// };




// backend/src/middleware/authMiddleware.js
const initFirebaseAdmin = require('../config/firebaseAdmin'); // returns firebase-admin app
const admin = initFirebaseAdmin();
const User = require('../models/User');

module.exports = async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) return res.status(401).json({ error: 'No auth token provided' });

    // Verify token with Firebase
    const decoded = await admin.auth().verifyIdToken(token);
    const uid = decoded.uid;
    const email = decoded.email || null;
    const displayName = decoded.name || decoded.displayName || '';

    // Try to find user in DB (by uid preferred)
    let userDoc = null;
    if (uid) userDoc = await User.findOne({ uid });
    if (!userDoc && email) userDoc = await User.findOne({ email });

    // If not found, create with automatic role inference
    if (!userDoc) {
      // 1) Role from header (if frontend explicitly sent one during registration)
      let inferredRole = (req.headers['x-user-role'] || '').toString().toLowerCase();

      // 2) If not provided, try parsing displayName pattern: "Full Name__admin" or "...__applicant"
      if (!inferredRole && typeof displayName === 'string' && displayName.includes('__')) {
        const parts = displayName.split('__');
        inferredRole = parts[1]?.trim().toLowerCase();
      }

      // 3) If still empty, optionally: make first user admin (safe default)
      if (!inferredRole) {
        const usersCount = await User.countDocuments();
        inferredRole = usersCount === 0 ? 'admin' : 'applicant';
      }

      // sanitize role
      if (!['admin', 'applicant'].includes(inferredRole)) inferredRole = 'applicant';

      userDoc = await User.create({
        uid,
        email,
        name: typeof displayName === 'string' ? displayName.split('__')[0] : '',
        role: inferredRole,
      });
    }

    // Attach user info to request (role from DB is authoritative)
    req.user = {
      uid: userDoc.uid,
      email: userDoc.email,
      name: userDoc.name,
      role: userDoc.role || 'applicant',
      status: userDoc.status || 'active',
    };

    return next();
  } catch (err) {
    console.error('Auth middleware error:', err && err.message ? err.message : err);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

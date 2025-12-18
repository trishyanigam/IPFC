// // backend/src/controllers/userController.js
// const User = require('../models/User');
// const admin = require('../config/firebaseAdmin')(); // ensure admin is initialized

// // GET /api/users
// exports.getUsers = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const users = await User.find().sort({ createdAt: -1 });
//     res.json(users);
//   } catch (err) { next(err); }
// };

// // PATCH /api/users/:id/block or /unblock
// exports.updateStatus = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const { id } = req.params;
//     const { action } = req.body; // 'block' or 'unblock'
//     const user = await User.findById(id);
//     if (!user) return res.status(404).json({ error: 'Not found' });
//     user.status = action === 'block' ? 'blocked' : 'active';
//     await user.save();
//     res.json(user);
//   } catch (err) { next(err); }
// };

// // DELETE /api/users/:id
// exports.deleteUser = async (req, res, next) => {
//   try {
//     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
//     const { id } = req.params;
//     const user = await User.findByIdAndDelete(id);
//     if (!user) return res.status(404).json({ error: 'Not found' });
//     // optionally delete Firebase user (if you want) - caution
//     // await admin.auth().deleteUser(user.uid);
//     res.json({ ok: true });
//   } catch (err) { next(err); }
// };



// backend/src/controllers/userController.js
const User = require('../models/User');

// GET /api/users  (admin only)
exports.getUsers = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden: admin only' });

    const users = await User.find().sort({ createdAt: -1 });
    return res.json(users);
  } catch (err) {
    console.error('getUsers error:', err);
    return next(err);
  }
};

// PATCH /api/users/:id/status  (admin only) - toggle block/unblock
exports.updateStatus = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden: admin only' });

    const { id } = req.params;
    const { action } = req.body; // expected 'block' or 'unblock'
    if (!['block', 'unblock'].includes(action)) return res.status(400).json({ error: 'Invalid action' });

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.status = action === 'block' ? 'blocked' : 'active';
    await user.save();

    return res.json({ message: 'User status updated', user });
  } catch (err) {
    console.error('updateStatus error:', err);
    return next(err);
  }
};

// DELETE /api/users/:id  (admin only)
exports.deleteUser = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden: admin only' });

    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('deleteUser error:', err);
    return next(err);
  }
};



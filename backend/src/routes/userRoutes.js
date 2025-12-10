// backend/src/routes/userRoutes.js
const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const ctrl = require('../controllers/userController');

router.get('/', auth, ctrl.getUsers);
router.patch('/:id/status', auth, ctrl.updateStatus); // body: { action: 'block'|'unblock' }
router.delete('/:id', auth, ctrl.deleteUser);

module.exports = router;

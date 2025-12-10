// backend/src/routes/applicationRoutes.js
const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const ctrl = require('../controllers/applicationController');

router.post('/submit', auth, ctrl.submitApplication);
router.get('/my', auth, ctrl.getMyApplications);
router.get('/all', auth, ctrl.getAllApplications); // admin
router.patch('/:id/status', auth, ctrl.updateStatus);
router.get('/stats', auth, ctrl.getStats);

module.exports = router;

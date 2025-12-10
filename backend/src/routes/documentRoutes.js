// backend/src/routes/documentRoutes.js
const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const ctrl = require('../controllers/documentController');

// multer middleware exported from controller
router.post('/upload', auth, ctrl.uploadMiddleware.single('file'), ctrl.uploadDocument);
router.get('/my', auth, ctrl.getMyDocuments);
router.get('/all', auth, ctrl.getAllDocuments); // admin
router.patch('/:id/review', auth, ctrl.verifyDocument); // body: { action: 'verify'|'reject' }

module.exports = router;

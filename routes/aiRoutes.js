import express from 'express';
const router = express.Router();

import controller from '../controllers/aiController.js';

router.get('/', controller.render);
router.post('/generate', controller.generate);

export default router;
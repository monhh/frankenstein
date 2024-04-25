import express from 'express';

import userRoutes from './usersRoutes.js';
import proyectRoutes from './projectRouter.js';
import questionRoutes from './questionRouter.js';

const router = express.Router();

router.use(userRoutes);
router.use(proyectRoutes);
router.use(questionRoutes);

export default router;

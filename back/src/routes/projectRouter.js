import express from 'express';

import authUser from '../middlewares/auth.js';

import newProjectController from '../controllers/projects/newProjectController.js';
import { getProjectController } from '../controllers/projects/getProjectController.js';
import { updateProjectController } from '../controllers/projects/updateProjectController.js';
import { deleteProjectController } from '../controllers/projects/deleteProjectController.js';
const router = express.Router();

// router.get('/', getAllprojects);
// router.get('/my', userAuth, getAllMyProjects);
router.get('/project/:id', getProjectController);
router.post('/newproject', authUser, newProjectController);
router.put('/projectupdate', authUser, updateProjectController);
router.delete('/project/:id', authUser, deleteProjectController);

export default router;

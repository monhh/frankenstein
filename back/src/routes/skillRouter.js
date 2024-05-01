import express from 'express';

import authUser from '../middlewares/auth.js';
import newExpertSkillController from '../controllers/expert/newExpertSkillController.js';
import { selectExpertSkillController } from '../controllers/expert/selectExpertSkillController.js';

const router = express.Router();

// TODO si queremos q solo un user Experto pueda crear una skill faltaría controlarlo
//* Endpoint para crear una nueva habilidad/tecnología/Skill
router.post('/newexpertskill', authUser, newExpertSkillController);

//* Endpoint listado habilidades/tecnologías
router.get('/expertskills', selectExpertSkillController);

export default router;

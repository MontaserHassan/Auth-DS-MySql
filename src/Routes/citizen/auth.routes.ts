import express from 'express';

import { citizenController } from '../../Controller/index.controller';


const router = express.Router();


router.post('/register', citizenController.registerCitizen);
router.post('/login', citizenController.loginCitizen);



export default router;
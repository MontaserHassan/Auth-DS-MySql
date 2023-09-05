import express from 'express';

import { citizenController } from '../../Controller/index.controller';


const router = express.Router();


router.post('/register', citizenController.registerUser);
router.post('/login', citizenController.loginUser);



export default router;
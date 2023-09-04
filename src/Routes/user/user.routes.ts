import express from 'express';

import { citizenController } from '../../Controller/index.controller';


const router = express.Router();


// middleware for citizen ...
router.use('/register', citizenController.registerUser);
router.use('/login', citizenController.loginUser);



export default router;
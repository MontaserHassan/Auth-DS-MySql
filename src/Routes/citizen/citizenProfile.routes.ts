import express from 'express';

import { citizenController } from '../../Controller/index.controller';


const router = express.Router();


router.get('/', citizenController.getMyProfile);



export default router;
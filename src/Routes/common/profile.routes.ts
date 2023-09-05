import express from 'express';

import { commonController } from '../../Controller/index.controller';


const router = express.Router();


router.get('/', commonController.getMyProfile);



export default router;
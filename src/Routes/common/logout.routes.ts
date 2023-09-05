import express from 'express';

import { commonController } from '../../Controller/index.controller';


const router = express.Router();


router.post('/', commonController.logoutEntity);



export default router;
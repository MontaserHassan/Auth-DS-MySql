import express from 'express';

import authRoutes from './auth.routes';
import citizenProfile from './citizenProfile.routes';
// import { getCurrentCitizen } from '../../Middleware/Auth/citizen/getCurrentCitizen.middleware';


const router = express.Router();


router.use('/auth', authRoutes);

// router.use(getCurrentCitizen);
router.use('/profile', citizenProfile);



export default router;
import express from 'express';

import userRoutes from './user/user.routes';
import employeeRoutes from './employee/employee.routes';


const router = express.Router();


router.use('/user', userRoutes);
router.use('/employee', employeeRoutes);



export default router;
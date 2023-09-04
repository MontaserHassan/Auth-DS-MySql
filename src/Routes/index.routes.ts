import express, { Request, Response, NextFunction } from 'express';

import citizenRoutes from './citizen/citizen.routes';
import employeeRoutes from './employee/employee.routes';
import errorHandler from '../Middleware/errorHandler.middleware';


const router = express.Router();


router.use('/citizen', citizenRoutes);
router.use('/employee', employeeRoutes);
router.use((err: Error, req: Request, res: Response, next: NextFunction) => errorHandler(err, req, res, next));



export default router;
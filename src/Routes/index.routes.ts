import express, { Request, Response, NextFunction } from 'express';

import citizenRoutes from './citizen/citizen.routes';
import employeeRoutes from './employee/employee.routes';
import commonRoutes from './common/common.routes';
import errorHandler from '../Middleware/errorHandler.middleware';
import CustomError from '../Utils/customError.utils';


const router = express.Router();


router.use('/common', commonRoutes);
router.use('/citizen', citizenRoutes);
router.use('/employee', employeeRoutes);
router.use('*', (req: Request, res: Response) => res.status(404).json({ message: `This url not found ${req.baseUrl}` }));
router.use((err: CustomError, req: Request, res: Response, next: NextFunction) => errorHandler(err, req, res, next));



export default router;
import express from 'express';

import employeeController from '../../Controller/employeeController/employee.controller';
import { getCurrentEmployee } from '../../Middleware/Auth/employee/getCurrentEmployee.middleware';


const router = express.Router();


router.post('/login', employeeController.loginEmployee);



export default router;
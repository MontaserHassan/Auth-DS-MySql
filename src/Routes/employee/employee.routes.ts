import express from 'express';

import employeeController from '../../Controller/employeeController/employee.controller';


const router = express.Router();


router.post('/login', employeeController.loginEmployee);



export default router;
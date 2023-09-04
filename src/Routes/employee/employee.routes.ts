import express from 'express';

import employeeController from '../../Controller/employeeController/employee.controller';


const router = express.Router();


// middleware for citizen ...
router.use('/login', employeeController.loginEmployee);



export default router;
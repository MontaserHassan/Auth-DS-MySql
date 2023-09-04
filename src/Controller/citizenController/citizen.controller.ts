import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from '../../Config/typeOrm.config';
import Citizens from '../../Models/citizen.model';


const citizenRepo = AppDataSource.getRepository(Citizens);

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const x = citizenRepo.find();
    console.log(x)
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log("login")
};



export default {
    registerUser,
    loginUser
};
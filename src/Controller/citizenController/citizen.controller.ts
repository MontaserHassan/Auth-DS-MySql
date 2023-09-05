import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from '../../Config/typeOrm.config';
import Citizens from '../../Models/citizen.model';
import CustomError from '../../Utils/customError.utils';


const citizenRepo = AppDataSource.getRepository(Citizens);

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('register');
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log("login");
};


const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    console.log('profile');
};


export default {
    registerUser,
    loginUser,
    getMyProfile,
};
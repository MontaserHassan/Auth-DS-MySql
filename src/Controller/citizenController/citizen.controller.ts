import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

import { AppDataSource } from '../../Config/typeOrm.config';
import Citizens from '../../Models/citizen.model';
import CustomError from '../../Utils/customError.utils';
import bcrypt from 'bcrypt';


// -------------------------------------------- catch entities -------------------------------------------- 


const citizenRepo = AppDataSource.getRepository(Citizens);


// -------------------------------------------- register citizen --------------------------------------------


const registerCitizen = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { first_name, second_name, third_name, fourth_name, nationality, passport_or_national_id, email, phone_number, address, job_title, gender, password, } = req.body
        const existedCitizen = await citizenRepo.findOne({ where: [{ email }, { passport_or_national_id }, { phone_number }] });
        if (existedCitizen) throw new CustomError('Email or national id or phone number is already existed', 401);
        const saltRounds = parseInt(process.env.SALT_ROUND);
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const newCitizen = new Citizens();
        newCitizen.first_name = first_name;
        newCitizen.second_name = second_name;
        newCitizen.third_name = third_name;
        newCitizen.fourth_name = fourth_name;
        newCitizen.nationality = nationality;
        newCitizen.passport_or_national_id = passport_or_national_id;
        newCitizen.email = email;
        newCitizen.password = hashPassword;
        newCitizen.phone_number = phone_number;
        newCitizen.address = address;
        newCitizen.job_title = job_title;
        newCitizen.gender = gender;
        newCitizen.role = "citizen";
        console.log('newCitizen: ', newCitizen)
        const savedCitizen = await citizenRepo.save(newCitizen);
        if (!savedCitizen) throw new CustomError('Error in entering data', 401);
        res.status(200).send({ isSuccess: true, status: 200, citizens: savedCitizen });
    } catch (error: any) {
        next(error)
    };
};


// -------------------------------------------- login citizen --------------------------------------------


const loginCitizen = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existedCitizen = await citizenRepo.findOne({ where: { email: req.body.email } });
        if (!existedCitizen) throw new CustomError('Incorrect Email or Password', 401);
        const isPasswordValid = existedCitizen.checkPasswordIsValid(req.body.password);
        if (!isPasswordValid) throw new CustomError('Incorrect Email or Password', 401);
        const expiresInMilliseconds: number = req.body.rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000; // 30 days or 1 day
        const token = jwt.sign({ user: existedCitizen }, process.env.JWT_SECRET as string, { expiresIn: expiresInMilliseconds });
        res.cookie('auth-token', token, { maxAge: expiresInMilliseconds });
        res.status(200).send({ isSuccess: true, status: 200, token: token });
    } catch (error: any) {
        next(error)
    }
};



export default {
    registerCitizen,
    loginCitizen,
};
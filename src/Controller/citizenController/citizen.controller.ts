import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from '../../Config/typeOrm.config';
import Citizens from '../../Models/citizen.model';
import CustomError from '../../Utils/customError.utils';
import bcrypt from 'bcrypt';


const citizenRepo = AppDataSource.getRepository(Citizens);

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { 
            first_name, second_name, third_name ,fourth_name,
            nationality, passport_or_national_id, email, phone_number,
            address, job_title, gender, password,
    
        } = req.body
        const existedCitizen = await citizenRepo.findOne({ where : [{ email }, { passport_or_national_id }, {phone_number}]});
        // const existedCitizenNationalId = await citizenRepo.findOne({ where : { passport_or_national_id }});

        if(existedCitizen)
            throw new CustomError('Email or national id or phone number is already existed', 401);

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
        const savedCitizen = await citizenRepo.save(newCitizen);
        
        if(!savedCitizen)
            throw new CustomError('Error in entering data', 401);

        res.status(200).send({
            isSuccess : true,
            status: 200,
            citizens: savedCitizen
        })  
    } catch (error) {
        next(error)
    }

};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log("login")
};



export default {
    registerUser,
    loginUser
};
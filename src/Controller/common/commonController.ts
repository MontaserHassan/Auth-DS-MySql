import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from '../../Config/typeOrm.config';
import Citizens from '../../Models/citizen.model';
import CustomError from '../../Utils/customError.utils';


// -------------------------------------------- catch entities -------------------------------------------- 


const citizenRepo = AppDataSource.getRepository(Citizens);


// -------------------------------------------- logout --------------------------------------------


const logoutEntity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies['auth-token'];
        if (!token) throw new CustomError('You are not logged in.', 401);
        res.cookie('auth-token', '', { expires: new Date(0) });
        res.status(200).json({ isSuccess: true, status: 200, message: 'Logout successful' });
    } catch (error) {
        next(error);
    }
};


// -------------------------------------------- get profile --------------------------------------------


const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entityId = req.currentUserId;
        const entityRole = req.currentUserRole;
        let profile;
        console.log('entityId: ', entityId);
        console.log('entityRole: ', entityRole);
        if (entityRole === 'citizen') {
            profile = await citizenRepo.findOne({ where: { id: entityId } });
        } else {
            console.log('employee')
            // profile = await employeeRepo.findById(entityId);
        }
        if (!profile) throw new CustomError('profile not found', 404);
        res.status(200).json({ isSuccess: true, status: 200, profile });
    } catch (error) {
        next(error);
    }
};



export default {
    logoutEntity,
    getMyProfile,
};
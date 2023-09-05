import { verify as jwtVerify } from 'jsonwebtoken';
import CustomError from '../../Utils/customError.utils';
import { Request, Response, NextFunction } from 'express';


const getCurrentEntityLogged = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let decodedPayload;
        // const token = req.header('auth-token');
        const token = req.cookies['auth-token'];
        if (!token) throw new CustomError('Access denied', 401);
        decodedPayload = jwtVerify(token, process.env.JWT_SECRET);
        if (decodedPayload) {
            req.currentUserId = decodedPayload.user.id;
            req.currentUserRole = decodedPayload.user.role;
            next();
        } else {
            throw new CustomError('Access denied', 401);
        }
    } catch (error) {
        next(error)
    }
};



export {
    getCurrentEntityLogged
};
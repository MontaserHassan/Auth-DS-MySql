import { NextFunction, Request, Response } from 'express';

import CustomError from '../Utils/customError.utils';


export default function errorHandler(err: Error | CustomError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof CustomError) {
        console.log("Custom Error");
        
        return res.status(err.statusCode).json({ error: err.message });
    }
    console.log("Not Custom Error");
    return res.status(500).json({ error: 'Internal Server Error' });
};



import { verify as jwtVerify } from 'jsonwebtoken';


const getCurrentEmployee = async (req, res, next) => {
    const token = req.header('authToken');
    if (!token) throw { status: 401, message: 'Access denied' };
    let decodedPayload;
    try {
        decodedPayload = jwtVerify(token, process.env.JWT_SECRET);
        console.log(decodedPayload);
    } catch (error) {
        throw { status: 401, message: 'Access denied' };
    }
    if (decodedPayload && decodedPayload.role === 'employee') {
        req.currentUserId = decodedPayload.id;
        next();
    } else {
        throw { status: 401, message: 'Access denied' };
    }
};



export {
    getCurrentEmployee
};
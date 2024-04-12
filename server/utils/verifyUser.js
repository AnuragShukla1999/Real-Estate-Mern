import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;;

    if (!token) return next(errorHandler(401, 'Unauthorized'));

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id; 
        next();
    } catch (error) {
        next(errorHandler(403, 'Token verification failed'));
    }
};
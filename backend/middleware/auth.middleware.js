import jwt from 'jsonwebtoken';
import { catchAsyncError } from './catchAsyncErrors.js';
import ErrorHandler from '../utils/errorHandler.js';
import User from '../models/user.model.js';


export const isAuthenticated = catchAsyncError(async (req, res, next) => {

    const { token } = req.cookies;


    if (!token) {
        const connectSid = req.cookies['connect.sid'];
        if (!connectSid) {
            return next(new ErrorHandler("Please Login to access this resource", 401));
        } else {
            next();
        }
    }

    try {


        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedData) {
            return next(new ErrorHandler("Please Login to access this resource", 401));
        }

        let user = await User.findOne({ where: { id: decodedData.id } });
        if (!user) {
            return next(new ErrorHandler("Please Login to access this resource", 401));
        }

        user = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            photo: user.photo
        }
        // console.log("user", user);
        req.user = user;
        next();
    } catch (err) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
});
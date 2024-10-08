import User from '../models/user.model.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ErrorHandler from '../utils/errorHandler.js';
import { catchAsyncError } from '../middleware/catchAsyncErrors.js';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { generateToken, setCookies } from '../utils/helpers.js';



export const register = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role } = req.body;

    let user = await User.findOne({ where: { email } });

    if (user) {
        return next(new ErrorHandler('User already exists', 400));
    }

    user = await User.create({
        email,
        password,
        role,
    });

    const token = generateToken(user.id);
    setCookies(res, token);

    res.status(201).json({
        message: "User created successfully",
        user: {
            id: user.id,
            email: user.email,
            photo: user.photo,
            role: user.role
        },
        success: true
    });
});


export const login = catchAsyncError(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ where: { email } });

    if (!user) {
        return next(new ErrorHandler('User doesnt exist', 400));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return next(new ErrorHandler('Invalid credentials', 400));
    }

    const token = generateToken(user.id);
    setCookies(res, token);

    res.status(200).json({
        message: "Login successfully",
        user: {
            id: user.id,
            email: user.email,
            photo: user.photo,
            role: user.role
        },
        success: true
    });

})

export const logout = catchAsyncError(async (req, res, next) => {

    //deleting token from cookies.
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    //for google auth
    res.cookie('connect.sid', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        message: "Logout successfully",
        success: true
    })
});

export const getProfile = catchAsyncError((req, res) => {
    res.status(200).json({
        user: req.user,
        success: true,
    })
});


export const initiateGoogleAuth = passport.authenticate('google', { scope: ['email', 'profile'] });


export const initiateFacebookAuth = passport.authenticate('facebook', { scope: ['email', 'public_profile'] });

export const initiateInstagramAuth = (req, res, next) => {
    passport.authenticate('instagram')(req, res, next);
};

import { Router } from 'express';
import { check } from 'express-validator';
import { register, login, logout, getProfile, initiateGoogleAuth, initiateFacebookAuth, initiateInstagramAuth } from '../controllers/auth.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';
import passport from '../config/passport.js'
import { setCookies } from '../utils/helpers.js';

const router = Router();


// Registration Route
router.route('/temp').get(isAuthenticated, (req, res) => {
    return res.status(200).json({
        message: "route working"
    })
})

router.route('/register').post(
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    ],
    register
);

// Login Route
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    login
);

//Logout
router.route('/logout').get(logout);

//profile
router.route('/profile').get(isAuthenticated, getProfile);

// google auth
router.get('/google', initiateGoogleAuth);

router.get('/google/confirm', passport.authenticate('google', {
    scope: ["profile", "email"],
    failureRedirect: '/google',
}), (req, res) => {

    setCookies(res, req.token);
    res.redirect(process.env.FRONTEND_URL_REDIRECT || '/success');
});

//facebook auth
router.get('/facebook', isAuthenticated, initiateFacebookAuth);

router.get('/facebook/confirm', passport.authenticate('facebook', {
    succeessRedirect: '/success',
    failureRedirect: '/api/v1/auth/facebook',
}));

//Instagram auth
router.get('/instagram', isAuthenticated, initiateInstagramAuth);

router.get('/instagram/callback', passport.authenticate('instagram', {
    successRedirect: '/success',
    failureRedirect: '/api/v1/auth/instagram',
}));

export default router;



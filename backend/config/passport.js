import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import User from '../models/user.model.js';
import dotenv from 'dotenv';
import { generateToken } from '../utils/helpers.js';
import { Strategy as InstagramStrategy } from 'passport-instagram'
import { Strategy as FacebookStrategy } from 'passport-facebook';

dotenv.config();


export const connectPassport = () => {


    const connectPassportGoogleAuth = () => {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URI,
            passReqToCallback: true
        },
            async (req, accessToken, refreshToken, profile, done) => {
                try {
                    let user = await User.findOne({ where: { googleId: profile.id } });

                    if (!user) {
                        user = await User.create({
                            googleId: profile.id,
                            email: profile.email,
                            name: profile.displayName,
                            password: null,
                            // photo: profile.picture,
                            // No password for Google-authenticated users
                        });
                    }

                    // console.log("Google user", user);
                    const token = generateToken(user.id);
                    req.token = token;

                    return done(null, user);
                } catch (err) {
                    return done(err, false);
                }
            }
        ));

        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser(async (id, done) => {
            try {
                const user = await User.findOne({ where: { id } });
                done(null, user);
            } catch (error) {
                done(error, null);
            }
        });

    };

    const connectPassportInstagramAuth = () => {

        passport.use(new InstagramStrategy({
            clientID: process.env.INSTAGRAM_APP_ID,
            clientSecret: process.env.INSTAGRAM_URL_SECRET,
            callbackURL: process.env.INSTAGRAM_CALLBACK_URL,
            passReqToCallback: true
        }, async function (req, token, refreshToken, profile, done) {


            try {
                const loggedInUserId = req.user?.id;
                if (loggedInUserId) {
                    let user = await User.findOne({ where: { id: loggedInUserId } });

                    if (!user.InstagramId) {
                        user.InstagramId = profile.id;
                        user.photo = profile.photos ? profile.photos[0].value : user.photo;
                        await user.save();
                        return done(null, user);
                    }
                    else return done(null, user);
                }
                return done(new Error("User not logged in or not found"), false);
            } catch (err) {
                return done(err, false);
            }
        }))

    };


    const connectPassportFacebookAuth = () => {

        passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'displayName', 'name', 'photos', 'email'],
            passReqToCallback: true
        }, async function (req, token, refreshToken, profile, done) {

            try {
                const loggedInUserId = req.user?.id;
                if (loggedInUserId) {
                    let user = await User.findOne({ where: { id: loggedInUserId } });

                    if (!user.facebookId) {
                        user.facebookId = profile.id;
                        user.photo = profile.photos ? profile.photos[0].value : user.photo;
                        await user.save();
                        return done(null, user);
                    } else {
                        return done(null, user);
                    }
                }
                return done(new Error("User not logged in or not found"), false);
            } catch (err) {
                // console.log("Error", err);
                return done(err, false);
            }
        }));

        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser(async (id, done) => {
            try {
                const user = await User.findOne({ where: { id } });
                done(null, user);
            } catch (error) {
                done(error, null);
            }
        });

    };

    connectPassportGoogleAuth();
    connectPassportInstagramAuth();
    connectPassportFacebookAuth();
};
export default passport;


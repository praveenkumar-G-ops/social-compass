const BASE_URL = "http://localhost:3000";

export const API_AUTH__ENDPOINTS = {
    register_user: '/auth/register',
    login_user: '/auth/login',
    logout_user: '/auth/logout',
    user_profile: '/auth/profile',
    initiate_google_auth: '/auth/google',
    initiate_facebook_auth: '/auth/facebook',
    initiate_instagram_auth: '/auth/instagram',

};

export default BASE_URL;
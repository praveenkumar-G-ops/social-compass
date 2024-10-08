import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import authRoutes from './routes/auth.route.js';
import errorMiddleware from './middleware/Error.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { connectPassport } from './config/passport.js';
import cors from 'cors';
import { isAuthenticated } from './middleware/auth.middleware.js';

dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 1 day cookie expiration
    }
}));

//passport initialization.
app.use(passport.session());
app.use(passport.initialize());
connectPassport();
// app.use(passport.authenticate("session"));
// app.enable("trust proxy");


//middlewares
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser())

app.use('/api/v1/auth', authRoutes);


const PORT = process.env.PORT || 3000;

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('<a href="/api/v1/auth/google"> Google </a>');
})

app.get('/success', isAuthenticated, (req, res) => {
    res.send('<h1> Success</h1> <br/> <a href="/api/v1/auth/facebook"> Facebook </a> <br/> <a href="/api/v1/auth/instagram"> Instagram </a>');
})


//Database connection
sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.log('Database sync error:', error));

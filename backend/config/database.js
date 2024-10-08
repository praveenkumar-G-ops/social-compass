import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false, // Disable logging for production
    dialectOptions: {
        ssl: {
            require: true, // Render requires SSL
            rejectUnauthorized: false, // For cloud services like Render
        },
    },
});

export default sequelize;
    
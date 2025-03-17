import express from 'express';
import dotenv from 'dotenv';
import userModel from './models/user.model.js';
import router from './routes/user.routes.js';
import { dbConnection, sequelize } from './config/dbConnect.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/', router);

const startServer = async () => {
    try {
        await dbConnection(); // Ensure DB connection before syncing models
        await sequelize.sync();
        console.log("Database connected & synced");

        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

startServer();

import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_Name, process.env.DB_User, process.env.DB_Password, {
    host: 'localhost',
    dialect:  'mysql' 
  });

  const dbConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  export default {dbConnection,sequelize};
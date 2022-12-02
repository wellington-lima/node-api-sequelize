import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_PG_NAME as string;
const dbUser = process.env.DB_PG_USER as string;
const dbHost = process.env.DB_PG_HOST;
const dbPassword = process.env.DB_PG_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
});

export default sequelize;
import { Sequelize } from "sequelize";

const user = process.env.DB_USER || "";

export const sequelize = new Sequelize(
    'app_copa',
    user,	
    process.env.DB_PASSWORD,	
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      timezone: '-03:00',
    },
);
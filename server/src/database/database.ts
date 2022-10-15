import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'app_copa',
    'root',	
    '#Jojoka0723',	
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      timezone: '-03:00',
    },
);
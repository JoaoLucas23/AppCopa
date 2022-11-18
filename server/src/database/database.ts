import { Sequelize } from "sequelize";

const user = process.env.DB_USER || "";

export const sequelize = new Sequelize(
    'app_copa',
    'root',	
    '#Jojoka0723',	
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      timezone: '-03:00',
    },
);
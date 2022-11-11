import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";
import { Partida } from "../Partida/models/Partidas";

export interface EstadioProps {
    id: number;
    nome: string;
    cidade: string;
    capacidade: number;
    foto: string;
}

export const Estadios = sequelize.define('Estadios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

Estadios.sync({alter:false, force: false })
    .then(() => {
        console.log('Tabela Estadios criada');
    }
    ).catch((err) => {
        console.log(err);
    });
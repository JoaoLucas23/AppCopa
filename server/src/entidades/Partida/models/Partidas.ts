import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database";

export interface PartidaProps {
    time1: string;
    time2: string;
    fase: string;
    grupo: string;
    data: Date;
}

export const Partida = sequelize.define('Partidas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_time_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_time_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fase: {
        type: DataTypes.ENUM,
        values: ['grupo', 'oitavas', 'quartas', 'semis', 'disputa_terceiro', 'final'],
    },
    id_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});

Partida.sync({alter:true, force: false })
    .then(() => {
        console.log('Tabela Partida criada');
    }
    ).catch((err) => {
        console.log(err);
    });
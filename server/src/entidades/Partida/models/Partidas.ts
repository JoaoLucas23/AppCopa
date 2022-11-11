import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database";
import { Estadios } from "../../Estadios/Estadio";

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
        allowNull: true,
    },
    id_time_2: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    gols_time_1: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gols_time_2: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_estadio: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    live: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    played: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: false,
});

Partida.belongsTo(Estadios, {foreignKey: 'id_estadio'});
Estadios.hasMany(Partida, {foreignKey: 'id_estadio'});

Partida.sync({alter:false, force: false })
    .then(() => {
        console.log('Tabela Partida criada');
    }
    ).catch((err) => {
        console.log(err);
    });
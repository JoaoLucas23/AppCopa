import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database";

export interface DadosTimesProps {
    id: number;
    id_time: number;
    quantidade_jogos: number;
    gols_feitos: number;
    gols_sofridos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    posicao_grupo: number;
}

export const DadosTimes = sequelize.define('DadosTimes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    id_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantidade_jogos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    gols_feitos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    gols_sofridos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    vitorias: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    empates: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    derrotas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
    },
},{
    timestamps: false,
}
);

DadosTimes.sync({alter: false, force: false })
    .then(() => {
        console.log('Tabela DadosTimes criada');
    })
    .catch((err) => {
        console.log(err);
    });
import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database";
import { JogadorProps } from "./Jogador";

export interface DadosJogadorProps extends JogadorProps {
    id: number;
    quantidade_jogos: number;
    gols_feitos: number;
    gols_sofridos: number;
    assistencias: number;
    cartoes_amarelos: number;
    cartoes_vermelhos: number;
    defesas: number;
    desarmes: number;
    faltas_cometidas: number;
    faltas_sofridas: number;
    nota_media: number;
}

export const DadosJogador = sequelize.define('DadosJogador', {	
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_jogador: {
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
    assistencias: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    cartoes_amarelos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    cartoes_vermelhos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    defesas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    desarmes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    nota_media: {
        type: DataTypes.FLOAT,
        defaultValue: 6.0,
    },
    faltas_cometidas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    faltas_sofridas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
 }, 
 {
    timestamps: false,
});

DadosJogador.sync({alter: false, force: false })
    .then(() => {
        console.log('Tabela DadosJogador criada');
    }
    ).catch((err) => {
        console.log(err);
    });
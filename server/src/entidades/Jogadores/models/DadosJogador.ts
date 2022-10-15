import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database";
import { JogadorProps } from "./Jogador";

export interface DadosJogadorProps extends JogadorProps {
    id: number;
    quantidade_jogos: number;
    gols_feitos: number;
    cartoes_amarelos: number;
    cartoes_vermelhos: number;
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
        allowNull: false,
        defaultValue: 0,
    },
    gols_feitos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    cartoes_amarelos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    cartoes_vermelhos: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
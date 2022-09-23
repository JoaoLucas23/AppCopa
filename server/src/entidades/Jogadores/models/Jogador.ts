import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";
import { DadosJogador } from "./DadosJogador";

export interface JogadorProps {
    id: number;
    nome: string;
    data_nascimento: string;
    posicao: string;
    time: string;
    id_time: number;
}

export const Jogador = sequelize.define('Jogador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    altura: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    posicao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
});

DadosJogador.belongsTo(Jogador, {foreignKey: 'id_jogador'});
Jogador.hasOne(DadosJogador, {foreignKey: 'id_jogador'});

Jogador.sync({alter:false, force: false })
    .then(() => {
        console.log('Tabela Jogador criada');
    }
    ).catch((err) => {
        console.log(err);
    });
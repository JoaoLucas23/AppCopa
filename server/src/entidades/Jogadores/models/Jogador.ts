import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";
import { DadosJogador } from "./DadosJogador";

export interface JogadorProps {
    id: number;
    nome: string;
    data_nascimento: Date;
    posicao: string;
    time: string;
    id_time: number;
    foto: string;
    altura: number;
    pe: string;
    apelido: string;
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
    apelido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    altura: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    posicao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pe: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, 
{
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
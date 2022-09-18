import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";

export interface JogadorProps {
    id: number;
    nome: string;
    data_nascimento: string;
    posicao: string;
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

Jogador.sync({alter:true, force: false })
    .then(() => {
        console.log('Tabela Jogador criada');
    }
    ).catch((err) => {
        console.log(err);
    });
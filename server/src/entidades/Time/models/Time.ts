import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";
import { Grupo } from "../../Grupo/models/Grupo";
import { Jogador } from "../../Jogadores/models/Jogador";
import { DadosTimes } from "./DadosTimes";

export interface TimeProps {
    id: number;
    nome: string;
    sigla: string;
    titulos: number;
    grupo: string;
    bandeira: string;
    id_grupo: number;
}

export const Time = sequelize.define('Time', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sigla: {
        type: DataTypes.STRING,
        allowNull: false
    },
    titulos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bandeira: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pontos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    posicao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    timestamps: false,
});

Time.belongsTo(Grupo, {foreignKey: "id_grupo"});
Grupo.hasMany(Time, {foreignKey: "id_grupo"});

Jogador.belongsTo(Time, {foreignKey: "id_time"});
Time.hasMany(Jogador, {foreignKey: "id_time"});

DadosTimes.belongsTo(Time, {foreignKey: "id_time"});
Time.hasOne(DadosTimes, {foreignKey: "id_time"});

Time.sync({alter: false, force: false })
    .then(() => {
        console.log('Tabela Time criada');
    })
    .catch((err) => {
        console.log(err);
});

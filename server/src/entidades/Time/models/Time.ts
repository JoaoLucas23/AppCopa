import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";
import { Grupo } from "../../Grupo/models/Grupo";

export interface TimeProps {
    id: number;
    nome: string;
    sigle: string;
    titulos: number;
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
    id_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
});

Time.belongsTo(Grupo, {foreignKey: "id_grupo"});
Grupo.hasMany(Time, {foreignKey: "id_grupo"});

Time.sync({alter:true, force: false })
    .then(() => {
        console.log('Tabela Time criada');
    })
    .catch((err) => {
        console.log(err);
});

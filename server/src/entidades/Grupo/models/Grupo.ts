import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";

export interface GrupoProps {
    id: number;
    nome: string;
}

export const Grupo = sequelize.define('Grupo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    grupo: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});

Grupo.sync({alter: false, force: false })
    .then(() => {
        console.log('Tabela Grupo criada');
    }
    ).catch((err) => {
        console.log(err);
    });

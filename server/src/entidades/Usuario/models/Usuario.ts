import { sequelize } from "../../../database/database"
import { DataTypes, Model } from "sequelize";
import { TimesUsuario } from "../../TimesUsuario/models/TimesUsuario";

export interface UserProps {
    id: number;
    nome: string;
    email: string;
    senha?: string;
    timesFavoritos?: number[] | [];
}

export const Usuario = sequelize.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

TimesUsuario.belongsTo(Usuario, {foreignKey: "id_usuario"});
Usuario.hasMany(TimesUsuario, {foreignKey: "id_usuario"});

Usuario.sync({alter: false, force: false })
    .then(() => {
        console.log("Tabela Usuarios (re)criada")
    })
    .catch((err) => {
        console.log("Erro ao criar tabela Usuarios: ", err)
});


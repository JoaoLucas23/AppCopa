import { sequelize } from "../../../database/database"
import { DataTypes } from "sequelize";
import { TimesUsuario } from "../../TimesUsuario/models/TimesUsuario";

export interface UserProps {
    id: number;
    nome: string;
    email: string;
    senha?: string;
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
        unique: {
            name: "email",
            msg: "Email já cadastrado",
        }
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
Usuario.hasMany(TimesUsuario, {foreignKey: "id_usuario", onDelete: "CASCADE"});

Usuario.sync({alter: false, force: false })
    .then(() => {
        console.log("Tabela Usuarios (re)criada")
    })
    .catch((err) => {
        console.log("Erro ao criar tabela Usuarios: ", err)
});


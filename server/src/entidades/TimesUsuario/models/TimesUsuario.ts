import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";
import { Usuario } from "../../Usuario/models/Usuario";

export interface TimesUsuarioProps {
    id: number;
    id_time: number;
    id_usuario: number;
}

export const TimesUsuario = sequelize.define("TimesUsuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

TimesUsuario.belongsTo(Usuario, {foreignKey: "id_usuario"});
Usuario.hasMany(TimesUsuario, {foreignKey: "id_usuario"});

TimesUsuario.sync({alter: true, force: true })
    .then(() => {
        console.log("Tabela TimesUsuario (re)criada")
    }
    )
    .catch((err) => {
        console.log("Erro ao criar tabela TimesUsuario: ", err)
});

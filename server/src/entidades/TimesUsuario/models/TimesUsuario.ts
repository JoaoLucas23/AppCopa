import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";
import { Time } from "../../Time/models/Time";

export interface TimesUsuarioProps {
    id_usuario: number;
    listaTimes: number[];
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

TimesUsuario.belongsTo(Time, {foreignKey: "id_time"});
Time.hasMany(TimesUsuario, {foreignKey: "id_time"});

TimesUsuario.sync({alter: false, force: false })
    .then(() => {
        console.log("Tabela TimesUsuario (re)criada")
    }
    )
    .catch((err) => {
        console.log("Erro ao criar tabela TimesUsuario: ", err)
});

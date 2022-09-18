import { sequelize} from "../../../database/database";
import { DataTypes } from "sequelize";

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

Time.sync({alter:true, force: false })
    .then(() => {
        console.log('Tabela Time criada');
    })
    .catch((err) => {
        console.log(err);
});

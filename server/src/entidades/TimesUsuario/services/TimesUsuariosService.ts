import { Model } from "sequelize";
import { PartidaProps } from "../../Partida/models/Partidas";
import PartidasService from "../../Partida/services/PartidasService";
import { Time } from "../../Time/models/Time";
import { TimesUsuario, TimesUsuarioProps } from "../models/TimesUsuario";

  
class TimesUsuariosService {
    async adicionaTimesFavoritos(id_usuario: number, listaTimes: []) {
        console.log("listaTimes: ", listaTimes);
        for(const time of listaTimes)
        {
            await TimesUsuario.create({
                id_time: time,
                id_usuario: id_usuario,
            });
        }
    }

    async retornaTimesFavoritos(id_usuario: number) {
        const times = await TimesUsuario.findAll({
            where: {
                id_usuario: id_usuario,
            },
            include: ["Time"],
        });
        return times;
    }

    async retornaTimesFavoritosComUsuario(id_usuario: number) {
        const timesUsuario = await TimesUsuario.findAll({
            where: {
                id_usuario: id_usuario,
            },
            include: ["Time", "Usuario"],
        });
        return timesUsuario;
    }

    async retornaProximasPartidasFavoritos(id_usuario: number) {
        const timesUsuario = await TimesUsuario.findAll({
            where: {
                id_usuario: id_usuario,
            },
        });
        const partidasFavoritas = [];
 
        const partidas = await Promise.all(timesUsuario.map(async (timeUsuario) => {
            return PartidasService.retornaPartidasPorTime(timeUsuario.getDataValue("id_time"));
        }));
        
        partidasFavoritas.push(partidas);
        return partidasFavoritas;
    }

    async deletaTimesFavoritos(id_usuario: number) {
        await TimesUsuario.destroy({
            where: {
                id_usuario: id_usuario,
            },
        });
    }
}

export default new TimesUsuariosService();
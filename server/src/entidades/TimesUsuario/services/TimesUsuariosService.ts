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

    async deletaTimesFavoritos(id_usuario: number) {
        await TimesUsuario.destroy({
            where: {
                id_usuario: id_usuario,
            },
        });
    }
}

export default new TimesUsuariosService();
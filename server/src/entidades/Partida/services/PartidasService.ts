import { Partida, PartidaProps } from "../models/Partidas";
import GrupoService from "../../Grupo/services/GrupoService";
import TimeService from "../../Time/services/TimeService";
import { Time } from "../../Time/models/Time";
import { Op } from "sequelize";

class PartidasService {
    async criaPartida(body: PartidaProps){
        const grupo_id = await GrupoService.retornaIdDoGrupoPorNome(body.grupo);
        const time1_id = await TimeService.retornaIdDoTimePorNome(body.time1);
        const time2_id = await TimeService.retornaIdDoTimePorNome(body.time2);
        await Partida.create({
            id_time_1: time1_id,
            id_time_2: time2_id,
            fase: body.fase,
            id_grupo: grupo_id,
            data: body.data,
        });
    }

    async retornaTodasPartidas(){
        const partidas = await Partida.findAll();
        const partidasTimes = [];
        for (const partida of partidas) {
            const time1 = await Time.findByPk(partida.getDataValue('id_time_1'));
            const time2 = await Time.findByPk(partida.getDataValue('id_time_2'));
            partidasTimes.push({partida, time1, time2});
        }
        return partidasTimes;
    }

    async retornaPartidaPorId(idPartida: number){
        const partida = await Partida.findByPk(idPartida);
        const time1 = await Time.findByPk(partida?.getDataValue('id_time_1'));
        const time2 = await Time.findByPk(partida?.getDataValue('id_time_2'));
        if (partida) return {partida, time1, time2};
        else throw new Error("Partida não encontrada");
    }

    async retornaPartidasPorGrupo(idGrupo: number){
        return Partida.findAll({where: {id_grupo: idGrupo}});
    }

    async retornaPartidasPorData(data1: Date, data2: Date){
        const partidas = await Partida.findAll({
            where: {
                data: {
                    [Op.between]: [data1, data2]
                },
            }
        });
        const partidasTimes = [];
        for (const partida of partidas) {
            const time1 = await Time.findByPk(partida.getDataValue('id_time_1'));
            const time2 = await Time.findByPk(partida.getDataValue('id_time_2'));
            partidasTimes.push({partida, time1, time2});
        }
        return partidasTimes;
    }

    async retornaPartidasPorTime(idTime: number){
        return Partida.findAll({
            where: {
                $or: [ {id_time_1: idTime}, {id_time_2: idTime} ],
            },
    });
    }

    async retornaPartidasPorFase(fase: string){
        return Partida.findAll({where: {fase: fase}});
    }

    async editaPartida(idPartida: number, body: PartidaProps){
        const partida = await this.retornaPartidaPorId(idPartida);
        await partida.partida.update(body);
    }

    async deletaPartida(idPartida: number){
        const partida = await this.retornaPartidaPorId(idPartida);
        await partida.partida.destroy();
    }
}

export default new PartidasService();
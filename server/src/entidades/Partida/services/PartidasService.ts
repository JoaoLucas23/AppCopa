import { Partida, PartidaProps } from "../models/Partidas";
import GrupoService from "../../Grupo/services/GrupoService";
import TimeService from "../../Time/services/TimeService";
import { Time } from "../../Time/models/Time";

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
        return Partida.findAll({include: [
            {
                model: Time,
                as: "time1",
                where: {id: { $col: "Partidas.id_time_1" } }
            },
            {
                model: Time,
                as: "time2",
                where: {id: { $col: "Partidas.id_time_2" } }
            }
            ]});
    }

    async retornaPartidaPorId(idPartida: number){
        const partida = await Partida.findByPk(idPartida, {include: [
            {
                model: Time,
                as: "time1",
                where: {id: { $col: "Partidas.id_time_1" } }
            },
            {
                model: Time,
                as: "time2",
                where: {id: { $col: "Partidas.id_time_2" } }
            }
            ]});
        if (partida) return partida;
        else throw new Error("Partida não encontrada");
    }

    async retornaPartidasPorGrupo(idGrupo: number){
        return Partida.findAll({where: {id_grupo: idGrupo}, include: [
            {
                model: Time,
                as: "time1",
                where: {id: { $col: "Partidas.id_time_1" } }
            },
            {
                model: Time,
                as: "time2",
                where: {id: { $col: "Partidas.id_time_2" } }
            }
        ]});
    }

    async retornaPartidasPorTime(idTime: number){
        return Partida.findAll({where: {id_time_1: idTime}, include: [
            {
                model: Time,
                as: "time1",
                where: {id: { $col: "Partidas.id_time_1" } }
            },
            {
                model: Time,
                as: "time2",
                where: {id: { $col: "Partidas.id_time_2" } }
            }
            ]});
    }

    async retornaPartidasPorFase(fase: string){
        return Partida.findAll({where: {fase: fase}, include: [
            {
                model: Time,
                as: "time1",
                where: {id: { $col: "Partidas.id_time_1" } }
            },
            {
                model: Time,
                as: "time2",
                where: {id: { $col: "Partidas.id_time_2" } }
            }
        ]});
    }

    async editaPartida(idPartida: number, body: PartidaProps){
        const partida = await this.retornaPartidaPorId(idPartida);
        await partida.update(body);
    }

    async deletaPartida(idPartida: number){
        const partida = await this.retornaPartidaPorId(idPartida);
        await partida.destroy();
    }
}

export default new PartidasService();
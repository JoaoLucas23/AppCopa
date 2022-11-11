import { Partida, PartidaProps } from "../models/Partidas";
import GrupoService from "../../Grupo/services/GrupoService";
import TimeService from "../../Time/services/TimeService";
import { Time } from "../../Time/models/Time";
import { Op } from "sequelize";
import { Estadios } from "../../Estadios/Estadio";

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
        const partida = await Partida.findByPk(idPartida, {
            include: [
                {
                    model: Estadios,
                },
                    ],
        });
        const time1 = await Time.findByPk(partida?.getDataValue('id_time_1'));
        const time2 = await Time.findByPk(partida?.getDataValue('id_time_2'));
        if (partida) return {partida, time1, time2};
        else throw new Error("Partida não encontrada");
    }

    async retornaPartidasPorGrupo(idGrupo: number){
        return Partida.findAll({where: {id_grupo: idGrupo}});
    }

    async retornaProximasPartidas(data1: Date, data2: Date){
        let partidas = await Partida.findAll({
            where: {
                data: {
                    [Op.between]: [data1, data2]
                },
            }
        });

        if (partidas.length == 0) {
            const hoje = new Date();
            partidas = await Partida.findAll({
                where: {
                    data: {
                        [Op.gt]: hoje
                    },
                },
                order: [
                    ['data', 'ASC'],
                ],
                limit: 4,
            });
        }

        const partidasTimes = [];
        for (const partida of partidas) {
            const time1 = await Time.findByPk(partida.getDataValue('id_time_1'));
            const time2 = await Time.findByPk(partida.getDataValue('id_time_2'));
            partidasTimes.push({partida, time1, time2});
        }
        return partidasTimes;
    }

    async retornaPartidasPorData(data1: Date, data2: Date){
        let partidas = await Partida.findAll({
            where: {
                data: {
                    [Op.between]: [data1, data2]
                },
            }
        });
        const partidasTimes = [];
        if (partidas.length > 0) {
            for (const partida of partidas) {
                const time1 = await Time.findByPk(partida.getDataValue('id_time_1'));
                const time2 = await Time.findByPk(partida.getDataValue('id_time_2'));
                partidasTimes.push({partida, time1, time2});
            }
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

    async retornaPartidasPorMes(mes: number){
        let dia = mes == 11 ? 30 : 30;
        console.log(mes);
        const ultimoDia = new Date(`2022-${mes}-${dia}`);
        ultimoDia.setUTCHours(23, 59, 59, 999);
        console.log(ultimoDia);
        const partidas = await Partida.findAll({
            where: {
                data: {
                    [Op.between]: [new Date(`2022-${mes}-1`), ultimoDia]
                },
            },
            order: [
                ['data', 'ASC'],
            ],
        });
        const partidasTimes = [];
        for (const partida of partidas) {
            const time1 = await Time.findByPk(partida.getDataValue('id_time_1'));
            const time2 = await Time.findByPk(partida.getDataValue('id_time_2'));
            partidasTimes.push({partida, time1, time2});
        }
        return partidasTimes;
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
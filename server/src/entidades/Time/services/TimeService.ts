import { Op } from "sequelize";
import GrupoService from "../../Grupo/services/GrupoService";
import { DadosTimes } from "../models/DadosTimes";
import { Time, TimeProps } from "../models/Time";

class TimeService {

    async criaTime(body: TimeProps) {
        const grupo = await GrupoService.retornaIdDoGrupoPorNome(body.grupo);
        const time = {
            nome: body.nome,
            sigla: body.sigla,
            titulos: body.titulos,
            id_grupo: grupo,
        }
       await Time.create(time);
       return time;
    }

    async editaTime(idTime: number, body: TimeProps) {
        const time = await this.retornaTimePorId(idTime);
        await time.update(body);
    }

    async retornaTodosTimes() {
        return Time.findAll();
    }

     async retornaNomeDosTimes() {
        const times = await Time.findAll({attributes: ['nome'], order: ['nome']});
        return times.map(time => time.getDataValue('nome'));
     }  

    async retornaTimePorId(idTime: number) {
        const time = await Time.findByPk(idTime);
        if (time) return time;
        else throw new Error("Time não encontrado");
    }
    async retornaTimesPorGrupo(id_grupo: number) {
        await GrupoService.retornaGrupoPorId(id_grupo);
        return Time.findAll({where: {id_grupo: id_grupo}, order: ['posicao']});
    }

    async retornaIdDoTimePorNome(nomeTime: string) {
        const time = await Time.findOne({where: {nome: nomeTime}});
        if (time){
            const id_time = time.getDataValue("id");
            return id_time;
        }
        else throw new Error("Time não encontrado");
    }

    async retornaTimeComDados (id: number ) {
        return Time.findByPk(id, {
            include: [
                {
                    model: DadosTimes
                }
            ]
        })
    }

    async retornaTodosTimesComDados(ordenacao: string, ord: string) {
        return Time.findAll({
            include: [
                {
                    model: DadosTimes,
                    where: {quantidade_jogos: {[Op.gt]: 0}}
                }
            ],
            order: [
                [DadosTimes, ordenacao, ord]
            ],
            limit: 10,
        })
    }

    async retornaTodosTimesComPesquisa(filtro: string) {

        const whereStatement = (filtro === '') ? {} : {
            nome: {
                [Op.like]: `%${filtro}%`
            }
        }
        console.log(whereStatement);
        console.log(filtro);
        return Time.findAll({
            where: whereStatement,
        });
    }


    async deletaTime(idTime: number) {
        const time = await this.retornaTimePorId(idTime);
        await time.destroy();
    }
}

export default new TimeService();
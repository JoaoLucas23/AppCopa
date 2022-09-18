import GrupoService from "../../Grupo/services/GrupoService";
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
    async retornaTimePorId(idTime: number) {
        const time = await Time.findByPk(idTime);
        if (time) return time;
        else throw new Error("Time não encontrado");
    }
    async retornaTimesPorGrupo(id_grupo: number) {
        await GrupoService.retornaGrupoPorId(id_grupo);
        return Time.findAll({where: {grupo_id: id_grupo}});
    }

    async deletaTime(idTime: number) {
        const time = await this.retornaTimePorId(idTime);
        await time.destroy();
    }
}

export default new TimeService();
import { DadosTimes, DadosTimesProps } from "../models/DadosTimes";
import TimeService from "./TimeService";
import { TimeProps } from "../models/Time";

class DadosTimesServices {
    async criaDadosTimes() {
        const times = await TimeService.retornaTodosTimes();
        for (const time of times) {
            const timeId = time.getDataValue("id");
            await DadosTimes.create({id_time: timeId});
        }
    }

    async editaDadosTimes(id_time: number, body: DadosTimesProps) {
        const dadosTimes = await DadosTimes.findOne({where: {id_time: id_time}});
        dadosTimes?.update(body);
    }

    async retornaDadosDoTime(id_time: number){
        return DadosTimes.findOne({where: {id_time: id_time}});
     }

     async retornaTodosOsDados() {
        return DadosTimes.findAll();
     }
}

export default new DadosTimesServices();
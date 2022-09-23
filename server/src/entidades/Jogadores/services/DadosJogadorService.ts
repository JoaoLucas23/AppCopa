import { DadosJogador, DadosJogadorProps } from "../models/DadosJogador"
import { Jogador } from "../models/Jogador";
import JogadoresService from "./JogadoresService";

class DadosJogadorService {
    async criaDadosJogador (idJogador: number, body: DadosJogadorProps){
        await DadosJogador.create({id_jogador: idJogador, ...body});
    }
    
    async getDadosJogador (idJogador: number){
        await JogadoresService.retornaJogadorPorId(idJogador);
        return DadosJogador.findOne({where: {id_jogador: idJogador}});
    }

    async editaDadosJogador (idJogador: number, body: DadosJogadorProps){
        const dadosJogador = await this.getDadosJogador(idJogador);
        await dadosJogador?.update(body);
    }
}

export default new DadosJogadorService();
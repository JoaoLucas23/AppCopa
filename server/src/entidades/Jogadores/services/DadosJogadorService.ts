import { DadosJogador, DadosJogadorProps } from "../models/DadosJogador"
import { Jogador, JogadorProps } from "../models/Jogador";
import JogadoresService from "./JogadoresService";

class DadosJogadorService {
    async criaDadosJogador (idJogador: number){
        await DadosJogador.create({
            id_jogador: idJogador
        });
    }
    
    async getDadosJogador (idJogador: number){
        await JogadoresService.retornaJogadorPorId(idJogador);
        return DadosJogador.findOne({where: {id_jogador: idJogador}});
    }

    async editaDadosJogador (idJogador: number, body: DadosJogadorProps){
        const dadosJogador = await this.getDadosJogador(idJogador);
        await dadosJogador?.update(body);
    }

    async criaDadosJogadores(){
        const jogadores = await JogadoresService.retornaTodosJogadores();
        jogadores.forEach(async (jogador) => {
            const id = jogador.getDataValue("id");
            await this.criaDadosJogador(id);
        });
    }
}

export default new DadosJogadorService();
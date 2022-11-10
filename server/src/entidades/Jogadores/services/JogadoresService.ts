import { Time } from "../../Time/models/Time";
import TimeService from "../../Time/services/TimeService";
import { Jogador, JogadorProps } from "../models/Jogador";
import DadosJogadorService from "./DadosJogadorService";

class JogadoresService {
    async criaJogador(body: JogadorProps) {
        const time = await TimeService.retornaIdDoTimePorNome(body.time);
        const jogador = {
            nome: body.nome,
            apelido: body.apelido,
            altura: body.altura,
            pe: body.pe,
            posicao: body.posicao,
            data_nascimento: body.data_nascimento,
            id_time: time,
            foto: body.foto,
        }
        const novo_jogador = await Jogador.create(jogador);
        // const idJogador = novo_jogador.getDataValue("id");
        // await DadosJogadorService.criaDadosJogador(idJogador);
        // return novo_jogador;
    }

    async criar26JogadoresTodosTimes(body: JogadorProps) {
        for(let i = 1; i <= 32; i++) {
            for(let j=0; j<26; j++) {
                const jogador = {
                    nome: body.nome,
                    posicao: body.posicao,
                    data_nascimento: body.data_nascimento,
                    id_time: i,
                    foto: body.foto,
                }
                await Jogador.create(jogador);
            }
        }
    }


    async editaJogador(idJogador: number, body: JogadorProps) {
        const jogador = await this.retornaJogadorPorId(idJogador);
        await jogador.update(body);
    }

    async retornaTodosJogadores() {
        return Jogador.findAll();
    }

    async retornaJogadorPorId(idJogador: number) {
        const jogador = await Jogador.findByPk(idJogador);
        if (jogador) return jogador;
        else throw new Error("Jogador não encontrado");
    }

    async retornaJogadoresPorTime(id_time: number) {
        return Jogador.findAll({
            where: {
                id_time: id_time
            }
        }
        );
    }

    async deletaJogador(idJogador: number) {
        const jogador = await this.retornaJogadorPorId(idJogador);
        await jogador.destroy();
    }
}

export default new JogadoresService();
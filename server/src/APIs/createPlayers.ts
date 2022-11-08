import Jogadores from './jogadores.json';
import { Router } from "express";
import { Jogador } from '../entidades/Jogadores/models/Jogador';
import TimeService from '../entidades/Time/services/TimeService';

interface JogadoresProps {
    nome: string;
    apelido: string;
    data_nascimento: string;
    altura: number;
    posicao: string;
    pais: string;
    imagem: string;
}

const rotasJogadoresJson = Router();
rotasJogadoresJson.post("/",
    async (req, res, next) => {
        try {
            await criaJogadores(Jogadores);
            res.status(200).end();
        } catch (error) {
            return next(error);
        }
    }
);

async function getPosicao(posicao: string) {
    switch (posicao) {
        case "Goleiro":
            return "GOL";
        case "Defensor - Zagueiro":
            return "ZAG";
        case "Defensor - Lateral Esq.":
            return "LE";
        case "Defensor - Lateral Dir.":
            return "LD";
        case "Meio-Campo - Volante":
            return "MEI";
        case "Meio-Campo - Meia Central":
            return "MEI";
        case "Meio-Campo - Meia Ofensivo":
            return "MEI";
        default:
            return "ATA";
    }
}

async function criaJogadores(jogadores: JogadoresProps[]) {
    jogadores.map(async (jogador) => {
        const pos = await getPosicao(jogador.posicao);
        const idPais = await TimeService.retornaIdDoTimePorNome(jogador.pais);
        const j = {
            nome: jogador.nome,
            apelido: jogador.apelido,
            data_nascimento: jogador.data_nascimento,
            altura: jogador.altura,
            posicao: pos,
            id_time: idPais,
            foto: jogador.imagem
        }
        await Jogador.create(j);
    });
}


export default rotasJogadoresJson;
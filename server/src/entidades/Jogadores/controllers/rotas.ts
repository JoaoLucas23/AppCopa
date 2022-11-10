import { Router } from "express";
import DadosJogadorService from "../services/DadosJogadorService";
import JogadoresService from "../services/JogadoresService";

const rotasJogador: Router = Router();

rotasJogador.post( "/criaJogador",
    async (req, res, next) => {
    try {
        await JogadoresService.criaJogador(req.body);
        res.status(204);
    } catch (error) {
        next(error);
    }
});

rotasJogador.post("/criarJogadoresTodosTimes",
    async (req, res, next) => {
    try {
        await JogadoresService.criar26JogadoresTodosTimes(req.body);
        res.status(204);
    } catch (error) {
        next(error);
    }
});

rotasJogador.put( "/editaJogador/:idJogador",
    async (req, res, next) => {
    try {
        const idJogador: number = parseInt(req.params.idJogador);
        const jogador = await JogadoresService.editaJogador(idJogador, req.body);
        res.status(200).json(jogador);
    } catch (error) {
        next(error);
    }
});

rotasJogador.get( "/retornaTodosJogadores",
    async (req, res, next) => {
    try {
        const jogadores = await JogadoresService.retornaTodosJogadores();
        res.status(200).json(jogadores);
    } catch (error) {
        next(error);
    }
});

rotasJogador.get( "/retornaJogadorPorId/:idJogador",
    async (req, res, next) => {
    try {
        const idJogador: number = parseInt(req.params.idJogador);
        const jogador = await JogadoresService.retornaJogadorPorId(idJogador);
        res.status(200).json(jogador);
    } catch (error) {
        next(error);
    }
});

rotasJogador.get( "/retornaDadosPorIdJogador/:idJogador",
    async (req, res, next) => {
    try {
        const idJogador: number = parseInt(req.params.idJogador);
        const jogador = await DadosJogadorService.getDadosJogador(idJogador);
        res.status(200).json(jogador);
    } catch (error) {
        next(error);
    }
});

rotasJogador.post("/criaDadosJogador/:idJogador", 
    async (req, res, next) => {
    try {
        const idJogador: number = parseInt(req.params.idJogador);
        await DadosJogadorService.criaDadosJogador(idJogador);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

rotasJogador.get( "/retornaJogadoresPorTime/:id_time",
    async (req, res, next) => {
    try {
        const id_time: number = parseInt(req.params.id_time);
        const jogador = await JogadoresService.retornaJogadoresPorTime(id_time);
        res.status(200).json(jogador);
    } catch (error) {
        next(error);
    }
});

rotasJogador.delete( "/deleteJogador/:idJogador",
    async (req, res, next) => {
    try {
        const idJogador: number = parseInt(req.params.idJogador);
        await JogadoresService.deletaJogador(idJogador);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

export default rotasJogador;
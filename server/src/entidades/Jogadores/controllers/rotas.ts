import { Router } from "express";
import JogadoresService from "../services/JogadoresService";

const rotasJogador: Router = Router();

rotasJogador.post( "/criaJogador",
    async (req, res, next) => {
    try {
        const jogador = await JogadoresService.criaJogador(req.body);
        res.status(204).json(jogador);
    } catch (error) {
        next(error);
    }
});

rotasJogador.put( "/editaJogador/:idJogador",
    async (req, res, next) => {
    try {
        const idJogador: number = parseInt(req.params.idJogador);
        const jogador = await JogadoresService.editaJogador(idJogador, req.body);
        res.status(204).json(jogador);
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

rotasJogador.get( "/retornaJogadoresPorTime/:id_time",
    async (req, res, next) => {
    try {
        const id_time: number = parseInt(req.params.id_time);
        const jogador = await JogadoresService.retornaJogadoresPorTime(id_time);
        res.status(204).json(jogador);
    } catch (error) {
        next(error);
    }
});

rotasJogador.post( "/deleteJogador/:idJogador",
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
import { Router } from "express";
import TimeService from "../services/TimeService";

const rotasTime: Router = Router();

rotasTime.post(('/criaTime'),
    async (req, res, next) => {
        try {
            const time = await TimeService.criaTime(req.body);
            res.status(204).json(time);
        } catch (error) {
            next(error);
        }
});

rotasTime.put(('/editaTime/:idTime'),
    async (req, res, next) => {
        try {
            const idTime: number = parseInt(req.params.idTime);
            const time = await TimeService.editaTime(idTime, req.body);
            res.status(204).json(time);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaTime/:idTime'),
    async (req, res, next) => {
        try {
            const idTime: number = parseInt(req.params.idTime);
            const time = await TimeService.retornaTimePorId(idTime);
            res.status(200).json(time);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaTimesPorGrupo/:idGrupo'),
    async (req, res, next) => {
        try {
            const idGrupo: number = parseInt(req.params.idGrupo);
            const times = await TimeService.retornaTimesPorGrupo(idGrupo);
            res.status(200).json(times);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaTodosTimes'),
    async (req, res, next) => {
        try {
            const times = await TimeService.retornaTodosTimes();
            res.status(200).json(times);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaTodosTimesComFiltro/:filtro'),
    async (req, res, next) => {
        try {
            console.log(req.params.filtro);
            // const filtro: string = req.params.filtro;
            // const times = await TimeService.retornaTodosTimesComPesquisa(filtro);
            // res.status(200).json(times);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaTodosTimes/nomes'),
    async (req, res, next) => {
        try {
            const times = await TimeService.retornaNomeDosTimes();
            res.status(200).json(times);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaTimeComDado/:id'),
    async (req, res, next) => {
        try {
            const id: number = parseInt(req.params.id);
            const times = await TimeService.retornaTimeComDados(id);
            res.status(200).json(times);
        } catch (error) {
            next(error);
        }
});

rotasTime.get(('/retornaPaisesComDados/:ordenacao/:ord'),
    async (req, res, next) => {
        try {
            const ord: string = req.params.ord;
            const ordenacao: string = req.params.ordenacao;
            const times = await TimeService.retornaTodosTimesComDados(ordenacao, ord);
            res.status(200).json(times);
        } catch (error) {
            next(error);
        }
});


rotasTime.delete(('/deletaTime/:idTime'),
    async (req, res, next) => {
        try {
            const idTime: number = parseInt(req.params.idTime);
            const time = await TimeService.deletaTime(idTime);
            res.status(200).json(time);
        } catch (error) {
            next(error);
        }
});


export default rotasTime;
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
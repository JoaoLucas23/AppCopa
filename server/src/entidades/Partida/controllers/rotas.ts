import { Router } from "express";
import PartidasService from "../services/PartidasService";

const partidasRouter = Router();

partidasRouter.post("/criaPartida", 
    async (req, res, next) => {
        try {
            await PartidasService.criaPartida(req.body);
            return res.status(200).end();
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.put("/editaPartida/:id",
    async (req, res, next) => {
        try {
            const id:number = parseInt(req.params.id)
            await PartidasService.editaPartida(id, req.body);
            return res.status(204).end();
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaTodasPartidas",
    async (req, res, next) => {
        try {
            const partidas = await PartidasService.retornaTodasPartidas();
            return res.status(200).json(partidas);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaPartidaPorId/:id",
    async (req, res, next) => {
        try {
            const id:number = parseInt(req.params.id)
            const partida = await PartidasService.retornaPartidaPorId(id);
            return res.status(200).json(partida);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaProximasPartidas",
    async (req, res, next) => {
        try {
            const data1 = new Date();
            data1.setHours(0, 0, 0, 0);
            const data2 = new Date();
            data2.setHours(23, 59, 59, 999);
            const partida = await PartidasService.retornaProximasPartidas(data1, data2);
            return res.status(200).json(partida);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaPartidasDaData/:data",
    async (req, res, next) => {
        try {
            const data1 = new Date(req.params.data);
            data1.setHours(0, 0, 0, 0);
            const data2 = new Date(req.params.data);
            data2.setHours(23, 59, 59, 999);
            const partida = await PartidasService.retornaPartidasPorData(data1, data2);
            return res.status(200).json(partida);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaPartidasPorMes/:mes",
    async (req, res, next) => {
        try {
            const mes = parseInt(req.params.mes);
            const partida = await PartidasService.retornaPartidasPorMes(mes);
            return res.status(200).json(partida);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaPartidasPorGrupo/:idGrupo",
    async (req, res, next) => {
        try {
            const id:number = parseInt(req.params.idGrupo)
            const partidas = await PartidasService.retornaPartidasPorGrupo(id);
            return res.status(200).json(partidas);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaPartidasPorTime/:idTime",
    async (req, res, next) => {
        try {
            const id:number = parseInt(req.params.idTime)
            const partidas = await PartidasService.retornaPartidasPorTime(id);
            return res.status(200).json(partidas);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.get("/retornaPartidasPorFase/:fase",
    async (req, res, next) => {
        try {
            const fase:string = req.params.fase
            const partidas = await PartidasService.retornaPartidasPorFase(fase);
            return res.status(200).json(partidas);
        } catch (error) {
            return next(error);
        }
    }
);

partidasRouter.delete("/deletaPartida/:id",
    async (req, res, next) => {
        try {
            const id:number = parseInt(req.params.id)
            await PartidasService.deletaPartida(id);
            return res.status(204).end();
        } catch (error) {
            return next(error);
        }
    }
);

export default partidasRouter;

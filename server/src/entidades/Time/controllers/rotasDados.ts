import { Router } from "express";
import DadosTimeService from "../services/DadosTimesService";

const rotaDados: Router = Router();

rotaDados.post(('/criaDados'), 
    async (req,res,next) =>  {
        try {
            await DadosTimeService.criaDadosTimes();
            res.status(204).end();
        } catch (error) {
            next(error);
        }
});

rotaDados.put(('/editaDadosTime/:id'), 
    async (req,res,next) =>  {
        try {
            const id:number = parseInt(req.params.id);
            await DadosTimeService.editaDadosTimes(id, req.body);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
});

rotaDados.get(('/todosDados'), 
    async (req,res,next) =>  {
        try {
            const dados = await DadosTimeService.retornaTodosOsDados();
            res.status(200).json(dados);
        } catch (error) {
            next(error);
        }
});

export default rotaDados;
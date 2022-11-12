import { Router } from "express";
import TimesUsuariosService from "../services/TimesUsuariosService";

const rotasTimesUsuario: Router = Router();

rotasTimesUsuario.get('/retornaTimesUsuarios/:idUsuario', 
    async (req, res, next) => {
        try {
            const idUsuario: number = parseInt(req.params.idUsuario);
            const timesUsuarios = await TimesUsuariosService.retornaTimesFavoritos(idUsuario);
            res.status(200).json(timesUsuarios);
        } catch (error) {
            next(error);
        }
});

rotasTimesUsuario.post('/cadastraTimesUsuario/:idUsuario',
    async (req, res, next) => {
        try {
            console.log(req.body);
            const idUsuario: number = parseInt(req.params.idUsuario);
            const times: [] = req.body.listaTimes; 
            await TimesUsuariosService.adicionaTimesFavoritos(idUsuario, times);
            res.status(200).end();
        } catch (error) {
            next(error);
        }
});

export default rotasTimesUsuario;

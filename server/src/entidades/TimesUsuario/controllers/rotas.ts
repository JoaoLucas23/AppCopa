import { Router } from "express";
import TimesUsuariosService from "../services/TimesUsuariosService";

const rotasTimesUsuario: Router = Router();

rotasTimesUsuario.get('/retornaTimesUsuarios/:idUsuario', 
    async (req, res, next) => {
        try {
            const idUsuario: number = parseInt(req.params.idUsuario);
            const timesUsuarios = await TimesUsuariosService.retornaTimesFavoritosComUsuario(idUsuario);
            res.status(200).json(timesUsuarios);
        } catch (error) {
            next(error);
        }
});

export default rotasTimesUsuario;

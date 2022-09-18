import { Router } from "express";
import GrupoService from "../services/GrupoService";

const rotasGrupo: Router = Router();

rotasGrupo.post(('/criaGrupos'),
    async (req, res, next) => {
    try {
        const grupo = await GrupoService.criaTodosGrupos();
        res.status(200).json(grupo);
    } catch (error) {
        next(error);
    }
});

rotasGrupo.get(('/retornaGrupo/:idGrupo'),
    async (req, res, next) => {
    try {
        const idGrupo: number = parseInt(req.params.idGrupo);
        const grupo = await GrupoService.retornaGrupoPorId(idGrupo);
        res.status(204).json(grupo);
    } catch (error) {
        next(error);
    }
});

export default rotasGrupo;
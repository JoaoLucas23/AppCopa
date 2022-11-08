import { Router } from "express";
// import { loginMiddleware } from "../../../middlewares/login";
import UsuarioService from "../services/UsuarioService";

const rotasUsuario: Router = Router();

rotasUsuario.post("/",);

rotasUsuario.post(('/criarUsuario'),
    async (req, res, next) => {
        try {
            const usuario = await UsuarioService.criaUsuario(req.body);
            res.status(204).json(usuario);
        } catch (error) {
            next(error);
        }
});

rotasUsuario.route('/editaUsuario/:idUsuario').put(
    async (req, res, next) => {
        try {
            const idUsuario: number = parseInt(req.params.idUsuario);
            await UsuarioService.editaUsuario(idUsuario, req.body);
            res.status(204).send('Usuario editado com sucesso');
        } catch (error) {
            next(error);
        }
});

rotasUsuario.route('/retornaUsuario/:idUsuario').get(
    async (req, res, next) => {
        try {
            const idUsuario: number = parseInt(req.params.idUsuario);
            const usuario = await UsuarioService.retornaUsuarioPorId(idUsuario);
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
});

rotasUsuario.route('/retornaTodosUsuarios').get(
    async (req, res, next) => {
        try {
            const usuarios = await UsuarioService.retornaTodosUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            next(error);
        }
});

rotasUsuario.route('/deletaUsuario/:idUsuario').delete(
    async (req, res, next) => {
        try {
            const idUsuario: number = parseInt(req.params.idUsuario);
            const usuarios = await UsuarioService.deletaUsuario(idUsuario);
            res.status(204).send("Usuario deletado com sucesso");
        } catch (error) {
            next(error);
        }
});

export default rotasUsuario;
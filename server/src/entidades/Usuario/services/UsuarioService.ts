import TimesUsuariosService from "../../TimesUsuario/services/TimesUsuariosService";
import { Usuario, UserProps} from "../models/Usuario";

class UsuarioService {
    async criaUsuario(body: UserProps) {
        const usuario = {
            nome:  body.nome,
            email: body.email,
            senha: body.senha,
        };
        const novoUsuario = await Usuario.create(usuario);
        const id_usuario: number = novoUsuario.getDataValue("id");
        return usuario;
    }

    async editaUsuario(userId: number, body: UserProps) {
        const usuario = await this.retornaUsuarioPorId(userId);
        usuario.update(body);
    }

    async retornaTodosUsuarios() {
        const usuarios = await Usuario.findAll();
        return usuarios;
    }

    async retornaUsuarioPorId(userId: number) {
        const usuario = await Usuario.findByPk(userId, {
            include: ["TimesFavoritos"],
        });
        if (usuario) return usuario;
        else throw new Error("Usuario não encontrado");
    }

    async deletaUsuario(userId: number) {
        const usuario = await this.retornaUsuarioPorId(userId);
        usuario.destroy();
    }

}

export default new UsuarioService();
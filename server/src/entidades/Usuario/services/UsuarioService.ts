import { Usuario, UserProps} from "../models/Usuario";

class UsuarioService {
    async criaUsuario(body: UserProps) {
        const usuario = {
            nome:  body.nome,
            email: body.email,
            senha: body.senha,
        };
        await Usuario.create(usuario);
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
        const usuario = await Usuario.findByPk(userId);
        if (usuario) return usuario;
        else throw new Error("Usuario não encontrado");
    }

    async deletaUsuario(userId: number) {
        const usuario = await this.retornaUsuarioPorId(userId);
        usuario.destroy();
    }
}

export default new UsuarioService();
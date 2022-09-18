import { Grupo, GrupoProps } from "../models/Grupo";

class GrupoService {
    async criaTodosGrupos() {
        const nomeGrupos = ["A", "B", "C", "D", "E", "F", "G", "H"];
        for (const nome of nomeGrupos) {
                await Grupo.create({
                    grupo: nome,
                });
            }
    }

    async retornaGrupoPorId(idGrupo: number) {
        const grupo = await Grupo.findByPk(idGrupo);
        if (grupo) return grupo;
        else throw new Error("Grupo não encontrado");
    }

    async retornaIdDoGrupoPorNome(nomeGrupo: string) {
        const grupo = await Grupo.findOne({where: {grupo: nomeGrupo}});
        if (grupo){
            const id_grupo = grupo.getDataValue("id");
            return id_grupo;
        }   
        else throw new Error("Grupo não encontrado");
    }

}

export default new GrupoService();
import { Router } from "express";
import NewsApiService from "./newsApi";

const rotasNoticias = Router();

rotasNoticias.get("/retornaPrincipaisNoticias",
    async (req, res, next) => {
        try {
            const noticias = await NewsApiService.retornaPrincipaisNoticias();
            return res.status(200).json(noticias);
        } catch (error) {
            return next(error);
        }
    }
);

rotasNoticias.get("/retornaTodasNoticias/",
    async (req, res, next) => {
        try {
            const noticias = await NewsApiService.retornaTodasNoticias();
            return res.status(200).json(noticias);
        } catch (error) {
            return next(error);
        }
    }
);

// rotasNoticias.get("/retornaNoticiasPorPais/:pais",
//     async (req, res, next) => {
//         try {
//             const pais = req.params.pais;
//             const noticias = await NewsApiService.retornaNoticiasPorPais(pais);
//             return res.status(200).json(noticias);
//         } catch (error) {
//             return next(error);
//         }
//     }
// );

rotasNoticias.get("/retornaNoticiasPorPesquisa/:pesquisa",
    async (req, res, next) => {
        try {
            const pesquisa = req.params.pesquisa;
            const noticias = await NewsApiService.retornaNoticiasPorPesquisa(pesquisa);
            return res.status(200).json(noticias);
        } catch (error) {
            return next(error);
        }
    }
);

export default rotasNoticias;
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

export default rotasNoticias;
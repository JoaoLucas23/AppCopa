import { Router } from "express";

const rotasUsuario: Router = Router();

rotasUsuario.route('/').get((req, res) => {
    res.send('Hello World!');
});

export default rotasUsuario;
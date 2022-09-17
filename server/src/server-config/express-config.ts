import express from 'express';

const app = express();

app.use(express.json());

import rotasUsuario from '../Usuario/controllers/rotas';
app.use('/api/usuarios', rotasUsuario);

export {app};

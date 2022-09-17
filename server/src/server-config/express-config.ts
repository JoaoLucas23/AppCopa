import express from 'express';

const app = express();

app.use(express.json());

import rotasUsuario from '../entidades/Usuario/controllers/rotas';
import rotasTime from '../entidades/Usuario/controllers/rotas';
import rotasGrupo from '../entidades/Usuario/controllers/rotas';
import rotasJogador from '../entidades/Usuario/controllers/rotas';

app.use('/api/usuarios', rotasUsuario);
app.use('/api/times', rotasTime);
app.use('/api/grupos', rotasGrupo);
app.use('/api/jogadoress', rotasJogador);

export {app};

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(
    {
      origin: process.env.APP_URL,
      credentials: true,
    },
));
app.use(express.urlencoded({
    extended: true,
  }));
app.use(express.json());

import rotasUsuario from '../entidades/Usuario/controllers/rotas';
import rotasTime from '../entidades/Time/controllers/rotas';
import rotasGrupo from '../entidades/Grupo/controllers/rotas';
import rotasJogador from '../entidades/Jogadores/controllers/rotas';

app.use('/api/usuarios', rotasUsuario);
app.use('/api/times', rotasTime);
app.use('/api/grupos', rotasGrupo);
app.use('/api/jogadoress', rotasJogador);

export {app};

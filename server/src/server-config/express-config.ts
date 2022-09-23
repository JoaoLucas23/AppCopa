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
import rotasTimesUsuario from '../entidades/TimesUsuario/controllers/rotas';
import rotaDados from "../entidades/Time/controllers/rotasDados";
import rotaPartidas from "../entidades/Partida/controllers/rotas";

app.use('/api/usuarios', rotasUsuario);
app.use('/api/times', rotasTime);
app.use('/api/grupos', rotasGrupo);
app.use('/api/jogadoress', rotasJogador);
app.use('/api/timesUsuarios', rotasTimesUsuario);
app.use('/api/dadosTimes', rotaDados);
app.use('/api/partidas', rotaPartidas);

export {app};

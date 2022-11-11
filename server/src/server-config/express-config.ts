import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

import rotasUsuario from '../entidades/Usuario/controllers/rotas';
import rotasTime from '../entidades/Time/controllers/rotas';
import rotasGrupo from '../entidades/Grupo/controllers/rotas';
import rotasJogador from '../entidades/Jogadores/controllers/rotas';
import rotasTimesUsuario from '../entidades/TimesUsuario/controllers/rotas';
import rotaDados from "../entidades/Time/controllers/rotasDados";
import rotaPartidas from "../entidades/Partida/controllers/rotas";
import rotasNoticias from "../APIs/news/rotas";
import rotasJogadoresJson from "../APIs/createPlayers";

app.use('/api/usuarios', rotasUsuario);
app.use('/api/times', rotasTime);
app.use('/api/grupos', rotasGrupo);
app.use('/api/jogadores', rotasJogador);
app.use('/api/timesUsuarios', rotasTimesUsuario);
app.use('/api/dadosTimes', rotaDados);
app.use('/api/partidas', rotaPartidas);
app.use('/api/noticias', rotasNoticias);
app.use('/api/jogadoresJson', rotasJogadoresJson);

export {app};

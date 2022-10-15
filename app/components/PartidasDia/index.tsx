import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Partida } from '../Partida/Partida';

interface PaisProps {
    bandeira: string;
    id: number;
    id_grupo: number;
    nome: string;
    sigla: string;  
    titulos: number;
  }
  
  interface PartidaProps {
    data: string;
    fase: string;
    id: number;
    id_grupo: number;
    id_time_1: number;
    id_time_2: number;
  }
  
  interface Props {
    partida: PartidaProps;
    time1: PaisProps;
    time2: PaisProps;
  }

export function PartidasDia() {

    const [partidas, setPartidas] = useState<Props[]>([]);

    useEffect(() => {
        axios.get(`http://192.168.100.11:3023/api/partidas/retornaPartidasDoDia`)
        .then((response) => {
          setPartidas(response.data)
        });
      }, []);

      console.log(partidas);

  return (
    <FlatList
        data={partidas}
        keyExtractor={item => item.partida.id}
        renderItem={({item}) => (
        <Partida 
            pais1={item?.time1.nome}
            pais2={item?.time2.nome}
            data={item?.partida.data}
            bandeira1={item?.time1.bandeira}
            bandeira2={item?.time2.bandeira}
        />
        )}
        vertical
    >

  </FlatList>
  );
}
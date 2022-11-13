
import { APP_URL } from '@env';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Partida } from '../Partida/Partida';
import { styles } from './styles';

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

export function PartidasFavoritos() {

    const [partidas, setPartidas] = useState<Props[]>();

    const id = 6;

    useEffect(() => {
        axios.get(`${APP_URL}/api/timesUsuarios/retornaProximasPartidasFavoritos/${id}`)
        .then(async (response) => {
          const resultado = response.data[0];
          const partidasFavoritas = [];
          for (let i = 0; i < resultado.length; i++) {
            const partidas = resultado[i];
            for (let j = 0; j < partidas.length; j++) {
              partidasFavoritas.push(partidas[j]);
            }
          }
          handlePartidas(partidasFavoritas);
        }).catch((error) => {
          console.log(error);
        }
        );
      }, []);

      function handlePartidas(partidas: Props[]) {
        const arr = partidas.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.partida.id === value.partida.id
          ))
        ).sort((a, b) => a.partida.data.localeCompare(b.partida.data)).slice(0, 4);
        setPartidas(arr);
      }



      if (!partidas) return null;

  return (
    <View style={styles.matches}>
      <FlatList
          data={partidas}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
          <Partida 
              idPartida={item.partida.id}
              pais1={item?.time1.nome}
              pais2={item?.time2.nome}
              data={item?.partida.data}
              bandeira1={item?.time1.bandeira}
              bandeira2={item?.time2.bandeira}
          />
          )}
          showsVerticalScrollIndicator={false}
      >

    </FlatList>
  </View>
  );
}
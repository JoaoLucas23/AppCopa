
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

export function PartidasDia() {

    const [partidas, setPartidas] = useState<Props[]>([]);

    useEffect(() => {
        axios.get(`${APP_URL}/api/partidas/retornaProximasPartidas`)
        .then((response) => {
          setPartidas(response.data)
        });
      }, []);

  return (
    <View style={styles.matches}>
      <Text style={styles.titles}>Próximas partidas</Text>
      <FlatList
          data={partidas}
          keyExtractor={item => String(item.partida.id)}
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
          vertical
      >
    </FlatList>
  </View>
  );
}
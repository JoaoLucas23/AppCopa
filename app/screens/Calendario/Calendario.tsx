import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Partida } from '../../components/Partida/Partida';
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

export function Calendario() {
    const [partidas, setPartidas] = useState<Props[]>([]);

    useEffect(() => {
      axios.get(`http://192.168.100.11:3023/api/partidas/retornaTodasPartidas`)
      .then((response) => {
        setPartidas(response.data)
      });
    }, []);

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}
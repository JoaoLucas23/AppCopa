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
    titulo: string;
    partida: PartidaProps;
    time1: PaisProps;
    time2: PaisProps;
  }

export function PartidasDia() {

    const [partidas, setPartidas] = useState<Props[]>([]);

    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();

    const dataString = `${ano}-${mes}-${dia}`;

    useEffect(() => {
        axios.get(`http://192.168.0.121:3023/api/partidas/retornaProximasPartidas`)
        .then((response) => {
          setPartidas(response.data)
        });
      }, []);

  return (
    <View style={styles.matches}>
      <Text style={styles.titles}>Próximas Partidas</Text>
      <FlatList
          data={partidas}
          keyExtractor={item => item.partida.id}
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
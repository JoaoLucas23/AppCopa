import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Pais, PaisProps } from '../../components/Pais/Pais';
import { styles } from './styles';

interface GrupoProps {
  id: number;
  grupo: string;
}


export function PaisesDoGrupo({id, grupo}: GrupoProps) {

    const [paisesDoGrupo, setPaisesDoGrupo] = useState<PaisProps[]>([]);

    useEffect(() => {
      axios.get(`http://192.168.0.121:3023/api/times/retornaTimesPorGrupo/${id}}`)
      .then((response) => {
        setPaisesDoGrupo(response.data)
      });
    }, []);
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GRUPO {grupo}</Text>
      <View style={styles.line}></View>
      <FlatList
            data={paisesDoGrupo}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <Pais 
              data={item}
            />
            )}
            vertical
            >

      </FlatList>
    </SafeAreaView>
  );
}
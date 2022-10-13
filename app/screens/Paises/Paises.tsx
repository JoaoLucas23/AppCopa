import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Pais, PaisProps } from '../../components/Pais/Pais';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { PaisesDoGrupo } from '../PaisesGrupo/PaisesDoGrupo';


export function Paises() {

    interface GrupoProps {
        id: number;
        grupo: string;
    }

    const [grupos, setGrupos] = useState<GrupoProps[]>([]);

    useEffect(() => {
      axios.get(`http://192.168.100.11:3023/api/grupos/retornaTodosGrupos/`)
      .then((response) => {
        setGrupos(response.data)
      });
    }, []);

  return (
    <SafeAreaView  style={styles.container}>
      <FlatList
            data={grupos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <View>
              <PaisesDoGrupo id={item.id} grupo={item.grupo} />
            </View>
            )}
            vertical
            >
      </FlatList>
    </SafeAreaView>
  );
}
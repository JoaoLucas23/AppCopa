import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
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
      axios.get(`http://150.164.171.243:3023/api/grupos/retornaTodosGrupos/`)
      .then((response) => {
        setGrupos(response.data)
      });
    }, []);

    console.log(grupos)

  return (
    <FlatList
          data={grupos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
          <View>
            <Text style={styles.text}> GRUPO {item.grupo} </Text>
            <PaisesDoGrupo idGrupo={item.id} />
          </View>
          )}
          vertical
          style={styles.container}
          >

    </FlatList>
  );
}
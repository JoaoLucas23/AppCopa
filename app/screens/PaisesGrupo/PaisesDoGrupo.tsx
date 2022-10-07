import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Pais, PaisProps } from '../../components/Pais/Pais';
import { styles } from './styles';

interface Props {
  idGrupo: number;
}


export function PaisesDoGrupo({idGrupo}: Props) {

    const [paisesDoGrupo, setPaisesDoGrupo] = useState<PaisProps[]>([]);

    useEffect(() => {
      axios.get(`http://150.164.171.243:3023/api/times/retornaTimesPorGrupo/${idGrupo}`)
      .then((response) => {
        setPaisesDoGrupo(response.data)
      });
    }, []);
    
  return (
    <FlatList
          data={paisesDoGrupo}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
          <Pais 
            data={item}
          />
          )}
          vertical
          style={styles.container}
          >

    </FlatList>
  );
}
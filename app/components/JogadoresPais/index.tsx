import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Jogador, JogadorProps } from '../Jogador';
import { styles } from './styles';

interface Props {
    id: number;
}

export function JogadoresPais({id}: Props) {

    const [jogadores, setJogadores] = useState<JogadorProps[]>([]);

    useEffect(() => {
        axios.get(`http://192.168.1.3:3023/api/jogadores/retornaJogadoresPorTime/${id}`)
        .then((response) => {
            setJogadores(response.data)
        });
      }, []);


  return (
    <View style={styles.container}>
        <FlatList
            data={jogadores}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Jogador 
                id={item.id}
                nome={item.nome}
                foto={item.foto}
                posicao={item.posicao}
                />
            )}
            vertical
            showsVerticalScrollIndicator={false}
        >

        </FlatList>
    </View>
  );
}
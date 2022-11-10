import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export interface JogadorProps {
    id: number;
    nome: string;
    posicao: string;
    foto: string;
}

export function Jogador({id, nome, foto, posicao}: JogadorProps) {

  const navigator = useNavigation();
  async function handleClick(idJogador: number) {
    navigator.navigate('JogadorDados', idJogador);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={()=>handleClick(id)}>
        <Image source={{uri: foto}} style={styles.foto}/>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.pos}>{posicao}</Text>
    </TouchableOpacity>
  );
}
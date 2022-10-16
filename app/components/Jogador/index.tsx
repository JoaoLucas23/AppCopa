import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export interface JogadorProps {
    id: number;
    nome: string;
    posicao: string;
    foto: string;
}

export function Jogador({id, nome, foto, posicao}: JogadorProps) {
  return (
    <View style={styles.container}>
        <Image source={{uri: foto}} style={styles.foto}/>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.pos}>{posicao}</Text>
    </View>
  );
}
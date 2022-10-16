import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface NoticiaProps {
    imagem: string | undefined;
    titulo: string | undefined;
}

export function Noticia({imagem, titulo}: NoticiaProps) {
  return (
      <TouchableOpacity style={styles.container}>
          <ImageBackground source={{uri: imagem}} style={styles.imagem}/>
          <View style={styles.text}>
            <View style={styles.textTitle}>
              <Text style={styles.titulo}>{titulo}</Text>
            </View>
          </View>
      </TouchableOpacity>
  );
}
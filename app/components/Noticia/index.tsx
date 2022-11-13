import React from 'react';
import { ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface NoticiaProps {
    imagem: string | undefined;
    titulo: string | undefined;
    url: string | undefined;
    descricao: string | undefined;
}

export function Noticia({imagem, titulo, url, descricao}: NoticiaProps) {

  const handleClickNoticia = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
      alert("Não foi possível abrir a notícia");
    }
  }

  descricao = descricao?.split('.')[0];

  return (
      <TouchableOpacity style={styles.container} onPress={() => handleClickNoticia(url)}>
          <ImageBackground source={{uri: imagem}} style={styles.imagem}/>
          <View style={styles.text}>
            <View style={styles.textTitle}>
              <Text style={styles.titulo}>{titulo ? titulo : descricao}</Text>
            </View>
          </View>
      </TouchableOpacity>
  );
}
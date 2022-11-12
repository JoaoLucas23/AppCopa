
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, Linking, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';
import { NoticiaProps } from '../../components/CarouselNoticias';
import { styles } from './styles';
import { APP_URL } from '@env';

export function Noticias() {

    const [noticias, setNoticias] = useState<NoticiaProps[]>([]);

    console.log(APP_URL);

    useEffect(() => {
        axios.get(`${APP_URL}/api/noticias/retornaTodasNoticias/`)
        .then((response) => {
          setNoticias(response.data)
        });
      }, []);

      const handleClickNoticia = async (url: string) => {
        try {
          await Linking.openURL(url);
        } catch (error) {
          console.log(error);
          alert("Não foi possível abrir a notícia");
        }
      }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.carroselNoticias}>
            <FlatList 
                data={noticias}
                keyExtractor={item => item.url}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.noticia} onPress={() => handleClickNoticia(item.url)}>
                        <Image source={{uri: item.imagem}} style={styles.imagemNoticia}/>
                        <Text style={styles.textoNoticia}>{item.titulo}</Text>
                        <Text style={styles.fonteNoticia}>{item.fonte}</Text>
                    </TouchableOpacity>
                )}
                vertical
                showsVerticalScrollIndicator={false}
            />
        </View>
    </SafeAreaView>
  );
}
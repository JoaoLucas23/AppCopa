
import { APP_URL } from '@env';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Noticia } from '../Noticia';
import { styles } from './styles';

export interface NoticiaProps {
  titulo: string,
  descricao: string | undefined,
  url: string | undefined,
  imagem: string | undefined,
  data: string | undefined,
  fonte: string | undefined,
  conteudo: string | undefined,
}

export function CarouselNoticias() {

  const [noticias, setNoticias] = useState<NoticiaProps[]>([]);

  const URL = APP_URL+'/api/noticias/retornaTodasNoticias/';
  
  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setNoticias(response.data)
    });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={noticias}
          keyExtractor={item => item.url}
          renderItem={({item}) => (
            <Noticia 
              imagem={item?.imagem} 
              titulo={item?.titulo}
              url={item?.url}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
        </FlatList>  
      </SafeAreaView>  
  );
}
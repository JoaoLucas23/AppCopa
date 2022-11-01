import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Noticia } from '../Noticia';

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

  useEffect(() => {
    axios.get(`http://192.168.0.121:3023/api/noticias/retornaPrincipaisNoticias`)
    .then((response) => {
      setNoticias(response.data)
    });
  }, []);


  return (
    <SafeAreaView>
        <FlatList
          data={noticias}
          keyExtractor={item => item.url}
          renderItem={({item}) => (
            <Noticia 
              imagem={item?.imagem} 
              titulo={item?.titulo}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
        </FlatList>  
      </SafeAreaView>  
  );
}
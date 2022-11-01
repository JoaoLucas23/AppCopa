import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { CarouselNoticias, NoticiaProps } from '../../components/CarouselNoticias';
import { styles } from './styles';

interface Props {
  status: string;
  totalResults: number;
  results: [{
    title: string;
    link: string;
    keywords: string | null;
    creator: string | null;
    video_url: string | null;
    description: string | null;
    content: string | null;
    pubDate: string;
    image_url: string;
    source_id: string;
    country: {};
    category: [],
    language: string;
  }]
}

export function Noticias() {

    // const [pesquisa, setPesquisa] = useState('');
    // const [paises, setPaises] = useState([]);
    // const [pais, setPais] = useState('');
    const [noticias, setNoticias] = useState<Props[]>([]);

    // useEffect(() => {
    //   axios.get(`http://192.168.0.121:3023/api/times/retornaTodosTimes/nomes/`)
    //   .then((response) => {
    //     setPaises(response.data)
    //   });
    // }, []);


    useEffect(() => {
        axios.get(`https://newsdata.io/api/1/news?apikey=pub_12968880797de02e0db17de5c9abfaf47e88f&category=sports&country=br&q=copa%20do%20mundo`)
        .then((response) => {
          setNoticias(response.data)
        });
      }, []);

    //  useEffect(() => {
    //     axios.get(`http://192.168.0.121:3023/api/noticias/retornaNoticiasPorPesquisa/${pesquisa}`)
    //     .then((response) => {
    //       setNoticias(response.data)
    //     });
    //   }, [pesquisa]);

  return (
    <SafeAreaView style={styles.container}>
        {/* <View style={styles.pesquisa}>
            <TextInput 
                style={styles.textPesquisa} 
                placeholder='Pesquisar notícias' 
                onChangeText={setPesquisa}
            />
        </View>
        <View style={styles.filtros}>
          <SelectDropdown
              data={paises}
              onSelect={(selectedItem, index) => {
                  setPais(selectedItem.value)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                  return item
              }}
              defaultButtonText={'Filtrar por país'}
              buttonStyle={styles.botaoFiltro}
          />
        </View> */}
        <View style={styles.carroselNoticias}>
            <FlatList 
                data={noticias.results}
                keyExtractor={item => item.image_url}
                renderItem={({item}) => (
                    <View style={styles.noticia}>
                        <Image source={{uri: item.image_url}} style={styles.imagemNoticia}/>
                        <Text style={styles.textoNoticia}>{item.title}</Text>
                    </View>
                )}
                vertical
                showsVerticalScrollIndicator={false}
            />
        </View>
    </SafeAreaView>
  );
}
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { CarouselNoticias, NoticiaProps } from '../../components/CarouselNoticias';
import { styles } from './styles';

export function Noticias() {

    const [pesquisa, setPesquisa] = useState('');
    const [paises, setPaises] = useState([]);
    const [pais, setPais] = useState('');
    const [noticias, setNoticias] = useState<NoticiaProps[]>([]);

    useEffect(() => {
      axios.get(`http://192.168.0.121:3023/api/times/retornaTodosTimes/nomes/`)
      .then((response) => {
        setPaises(response.data)
      });
    }, []);


    useEffect(() => {
        axios.get(`http://192.168.0.121:3023/api/noticias/retornaTodasNoticias/`)
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
        <View style={styles.pesquisa}>
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
        </View>
        <View style={styles.carroselNoticias}>
            <FlatList 
                data={noticias}
                keyExtractor={item => item.titulo}
                renderItem={({item}) => (
                    <View style={styles.noticia}>
                        <Image source={{uri: item.imagem}} style={styles.imagemNoticia}/>
                        <Text style={styles.textoNoticia}>{item.titulo}</Text>
                    </View>
                )}
                vertical
            />
        </View>
    </SafeAreaView>
  );
}
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { Button } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';
import axios from 'axios';

interface UserProps {
    name: string;
    image: string;
    id: number;
}

const times = [
    {
        name: 'Brasil',
        flag: 'flag'
    },
    {
        name: 'Canada',
        flag: 'flag'
    },
]

const boloes = [
    {
        name: 'Bolão da Copa',
        posicao: '1º'
    },
    {
        name: 'Bolão da Copa 2',
        posicao: '2º'
    },
]

interface Props {
  Time: {
    bandeira: string;
      id: number;
      id_grupo: number;
      nome: string;
      pontos: number;
      posicao: number;
      sigla: string;
      titulos: number
    };
    id: number;
    id_time: number;
    id_usuario: number;
}

const usuario : UserProps = {
  name: 'João',
  id: 6,
  image: 'person-circle-outline',
}

export function Perfil() {
  const [paisesFavoritos, setPaisesFavoritos] = useState<Props[]>([]);

  useEffect(() => {
    axios.get(`http://150.164.166.181:3023/api/timesUsuarios/retornaTimesUsuarios/${usuario.id}`)
    .then(response => {
      setPaisesFavoritos(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, [usuario.id]);

  console.log(paisesFavoritos);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
      <View style={styles.perfil}>
          <Ionicons name={usuario.image} size={100} style={styles.fotoUsuario}/>
          <Text style={styles.nomeUsuario}>{usuario.name}</Text>
      </View>
      <View style={styles.times}>
        <Text style={styles.titulo}>Times Favoritos</Text>
        <View style={styles.timesContainer}>
        <FlatList
          data={paisesFavoritos}  
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.time}>
              <Image source={{uri: item.Time.bandeira}} style={styles.bandeira} />
              <Text style={styles.nomeTime}>{item.Time.sigla}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Button mode='elevated' style={styles.botaoTime}
          textColor={COLORS.COLOR_GREY} buttonColor={COLORS.COLOR_DARK_GREY}
          icon="square-edit-outline" onPress={()=>console.log("CLICOU")}
        >Editar times favoritos</Button>
        </View>
      </View>
      <View style={styles.boloes}>
        <Text style={styles.titulo}>Bolões</Text>
        <View style={styles.botoes}>
        <Button mode='elevated' style={styles.botao}
          textColor={COLORS.COLOR_GREY} buttonColor={COLORS.COLOR_DARK_GREY}
          icon="plus" onPress={()=>console.log("CLICOU")}
        >Criar Bolão</Button>
          <Button mode='elevated' style={styles.botao}
           textColor={COLORS.COLOR_GREY} buttonColor={COLORS.COLOR_DARK_GREY}
           icon="magnify" onPress={()=>console.log("CLICOU")}
          >Procurar Bolão</Button>
        </View>
          <Text style={styles.titulo2}>Meus Bolões</Text>
          <View style={styles.boloesContainer}>
            <FlatList
                data={boloes}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                  <View style={styles.bolao}>
                    <Text style={styles.nomeBolao}>{item.name}</Text>
                    <Text style={styles.nomeBolao}>{item.posicao}</Text>
                  </View>
                )}
                vertical
                showsVerticalScrollIndicator={false}
              />
          </View>
          </View>
      </View>
    </SafeAreaView>
  );
}
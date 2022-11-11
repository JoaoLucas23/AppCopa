import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { Button } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';

interface UserProps {
    name: string;
    image: string;
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

export function Perfil() {

  const usuario : UserProps = {
    name: 'João',
    image: 'person-circle-outline',
  }

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
          data={times}  
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.time}>
              <Ionicons name={item.flag} size={25} style={styles.fotoTime}/>
              <Text style={styles.nomeTime}>{item.name}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </View>
      <View style={styles.boloes}>
        <Text style={styles.titulo}>Bolões</Text>
        <View style={styles.botoes}>
        <Button mode='elevated' style={styles.botao}
          textColor={COLORS.COLOR_WHITE} buttonColor={COLORS.COLOR_WINE}
        >Criar Bolão</Button>
          <Button mode='elevated' style={styles.botao}
           textColor={COLORS.COLOR_WHITE} buttonColor={COLORS.COLOR_WINE}
          >Procurar Bolão</Button>
        </View>
          <Text style={styles.titulo2}>Meus Bolões</Text>
          <View style={styles.boloesContainer}>
            <FlatList
                data={boloes}
                keyExtractor={item => item.id}
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
import { Button, FlatList, NativeBaseProvider, ScrollView, VStack } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

const boloes = [
    {
        name: 'Bolão da Copa',
        posicao: '1º'
    },
    {
        name: 'Bolão da Copa 2',
        posicao: '2º'
    },
    {
      name: 'Bolão da Copa',
      posicao: '1º'
  },
  {
      name: 'Bolão da Copa 2',
      posicao: '2º'
  },
  {
    name: 'Bolão da Copa',
    posicao: '1º'
},

]


export function Boloes() {
  return (
    <View style={styles.boloes}>
      <View style={styles.tituloView}>
        <Text style={styles.titulo}>Meus Bolões</Text>
      </View>
      {
        boloes.length > 0 ? (
          <FlatList
          data={boloes}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.bolao}>
              <Text style={styles.nomeBolao}>{item.name}</Text>
              <Text style={styles.nomeBolao}>{item.posicao}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
        ) : (
            <Text style={styles.semBoloesText}>Você ainda não participa de nenhum bolão!</Text>
        )
      }
      <View style={styles.header}>
        <Button style={styles.button} variant="outline" size="md" backgroundColor={COLORS.COLOR_GOLD5}
          startIcon={<Ionicons name="md-add-outline" size={20} color={COLORS.COLOR_GOLD3} />}
          onPress={() => console.log('Pressed')}
        >
          <Text style={styles.buttonText1}>Criar Bolão</Text>
        </Button>
        <Button style={styles.button} variant="outline" size="md" backgroundColor={COLORS.COLOR_GOLD4}
          startIcon={<Ionicons name="md-search" size={20} color={COLORS.COLOR_BLACK} />}
          onPress={() => console.log('Pressed')}
        >
          <Text style={styles.buttonText2}>Buscar Bolão</Text>
        </Button>
      </View>
  </View>
  );
}
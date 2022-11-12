import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';

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
]


export function Boloes() {
  return (
    <View style={styles.boloes}>
      <View style={styles.tituloView}>
        <Text style={styles.titulo}>Meus Bolões</Text>
        <IconButton iconColor={COLORS.COLOR_DARK_GREY} style={styles.icon} size={25}
          icon="plus-circle-outline" onPress={()=>console.log("CLICOU")}
        />
      </View>
      <View style={styles.boloesContainer}>
      {
        boloes.length > 10 ? (
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
        ) : (
            <Text style={styles.semBoloesText}>Você ainda não participa de nenhum bolão!</Text>
        )
      }
    </View>
  </View>
  );
}
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { PartidasDia } from '../../components/PartidasDia';
import { styles } from './styles';

export function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.news}>
        <Text style={styles.titles}>Notícias do dia</Text>
      </View>
      <View style={styles.matches}>
        <Text style={styles.titles}>Partidas do dia</Text>
        <PartidasDia />
      </View>
    </SafeAreaView>
  );
}
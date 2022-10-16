import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { CarouselNoticias } from '../../components/CarouselNoticias';
import { PartidasDia } from '../../components/PartidasDia';
import { styles } from './styles';

export function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.news}>
        <Text style={styles.titles}>Notícias do dia</Text>
        <CarouselNoticias />
      </View>
      <PartidasDia />
    </SafeAreaView>
  );
}
import { HStack, NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import { CarouselNoticias } from '../../components/CarouselNoticias';
import { Option } from '../../components/Option/Option';
import { PartidasDia } from '../../components/PartidasDia';
import { PartidasFavoritos } from '../../components/PartidasFavoritos/PartidasFavoritos';
import { styles } from './styles';

export function Home() {

  const [selectedOption, setSelectedOption] = useState<'proximas'|'favoritos'>('proximas')

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <CarouselNoticias />
          <PartidasDia />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
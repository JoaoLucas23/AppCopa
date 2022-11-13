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
            <HStack bgColor={COLORS.COLOR_GOLD5} p={1} rounded="sm" mb={2.5} mt={2.5} w='95%' alignSelf='center' >
                <Option 
                  title="Próximas Partidas" 
                  isSelected={selectedOption === 'proximas'}
                  onPress={() => setSelectedOption('proximas')}
                />

                <Option 
                  title="Times Favoritos"
                  isSelected={selectedOption === 'favoritos'}
                  onPress={() => setSelectedOption('favoritos')}
                />
            </HStack>
            {
              selectedOption === 'proximas' &&
              <PartidasDia />
            }
            {
              selectedOption === 'favoritos' &&
              <PartidasFavoritos />
            }
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
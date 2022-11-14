
import { APP_URL } from '@env';
import axios from 'axios';
import { HStack, NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import { Estatisticas } from '../../components/Estatisticas/Estatisticas';
import { Option } from '../../components/Option/Option';
import { PaisesDoGrupo } from '../PaisesGrupo/PaisesDoGrupo';
import { Playoffs } from '../Playoffs/Playoffs';
import { styles } from './styles';

export interface GrupoProps {
  id: number;
  grupo: string;
}

export function Classificacao() {

    const [grupos, setGrupos] = useState<GrupoProps[]>([]);
    const [selectedOption, setSelectedOption] = useState<'grupos'|'playoffs' | 'estatisticas'>('grupos')

    useEffect(() => {
      axios.get(`${APP_URL}/api/grupos/retornaTodosGrupos/`)
      .then((response) => {
        setGrupos(response.data)
      });
    }, []);

  return (
    <NativeBaseProvider> 
    <SafeAreaView  style={styles.container}>
      <View style={styles.card}>
      <View style={styles.header}>
      <HStack bgColor={COLORS.COLOR_GOLD5} p={1} rounded="sm" mb={1.5} mt={0} w='95%' alignSelf='center' >
                <Option 
                  title="Grupos" 
                  isSelected={selectedOption === 'grupos'}
                  onPress={() => setSelectedOption('grupos')}
                />

                <Option 
                  title="Playoffs"
                  isSelected={selectedOption === 'playoffs'}
                  onPress={() => setSelectedOption('playoffs')}
                />
                
                <Option 
                  title="Estatísticas"
                  isSelected={selectedOption === 'estatisticas'}
                  onPress={() => setSelectedOption('estatisticas')}
                />
            </HStack>
      </View>
      {
      (selectedOption === 'grupos') && 
        <FlatList
          data={grupos}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View>
              <PaisesDoGrupo id={item.id} grupo={item.grupo} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
       />
      }
      {
      (selectedOption === 'playoffs') &&
        <Playoffs />
      }
      {
      (selectedOption === 'estatisticas') &&
        <Estatisticas />
      }
      </View>
    </SafeAreaView>
    </NativeBaseProvider>
  );
}
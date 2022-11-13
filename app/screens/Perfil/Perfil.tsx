import { SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { COLORS } from '../../assets/COLORS';
import {HStack, IconButton, NativeBaseProvider} from 'native-base';
import { Option } from '../../components/Option/Option';
import React, {useState, useEffect} from 'react';
import { TimesFavoritos } from '../../components/TimesFavoritos/TimesFavoritos';
import { Boloes } from '../../components/Boloes/Boloes';

export interface UserProps {
    name: string;
    image: string;
    id: number;
}

const usuario : UserProps = {
  name: 'Gabriel Valadao Meira',
  id: 6,
  image: 'person-circle-outline',
}

export function Perfil() {

  const [selectedOption, setSelectedOption] = useState<'times'|'boloes'>('times')

  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
         {
            usuario.name.length <= 15 ? (
              <View style={styles.perfil}>
                <Ionicons name={usuario.image} size={40} style={styles.fotoUsuario}/>
                <Text style={styles.nomeUsuario}>{usuario.name}</Text>
                <IconButton icon={<Ionicons name='create-outline' size={20} style={styles.fotoUsuario}
                color={COLORS.COLOR_GOLD8}/>}/>
              </View>
            ) : (
              <View style={styles.perfil}>
                <Ionicons name={usuario.image} size={40} style={styles.fotoUsuario}/>
                <Text style={styles.nomeUsuario2}>{usuario.name}</Text>
                <IconButton icon={<Ionicons name='create-outline' size={20} style={styles.fotoUsuario}
                color={COLORS.COLOR_GREY3}/>}/>
              </View>
            )
         }
          <HStack bgColor={COLORS.COLOR_GOLD5} p={1} rounded="sm" mb={2.5} w='95%' alignSelf='center' >
                <Option 
                  title="Times Favoritos" 
                  isSelected={selectedOption === 'times'}
                  onPress={() => setSelectedOption('times')}
                />

                <Option 
                  title="Bolões" 
                  isSelected={selectedOption === 'boloes'}
                  onPress={() => setSelectedOption('boloes')}
                />
          </HStack>
          {
            selectedOption === 'times' && 
            <TimesFavoritos 
              id={usuario.id}
              image={usuario.image}
              name={usuario.name}
            />
          }
          {
            selectedOption === 'boloes' &&
            <Boloes />
          }
      </View>
    </SafeAreaView>
  </NativeBaseProvider>
  );
}
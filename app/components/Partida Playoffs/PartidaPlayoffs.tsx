import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface PartidaProps {
    idPartida: number;
    pais1: string | undefined;
    pais2: string | undefined;
    data: string | undefined;
    bandeira1: string | undefined;
    bandeira2: string | undefined;
    cod: string | undefined;
}

export function PartidaPlayoffs({idPartida, pais1, pais2, data, bandeira1, bandeira2, cod}: PartidaProps) {
    const dia = new Date(data).getDate();
    const mes = new Date(data).getMonth() + 1;
    const ano = new Date(data).getFullYear();
    const hora = new Date(data).getHours()-3;

    const navigation = useNavigation();

    function handleClick(id: number) {
        navigation.navigate('PaginaPartida', id);
      }

      const hoje = new Date();
      const inicioPlayoffs = new Date('2022-12-02');

  return (
    <TouchableOpacity style={styles.container}
    onPress={() => {handleClick(idPartida)}}
    >
        {
            hoje > inicioPlayoffs ? (
                <View style={styles.times}>
                    <Text style={styles.text}>{pais1}</Text>
                    <Image source={{uri: bandeira1}} style={styles.image} />
                    <Text style={styles.text}> x </Text>
                    <Image source={{uri: bandeira2}} style={styles.image} />
                    <Text style={styles.text}>{pais2}</Text>
                    <View style={styles.codigo}>
                        <Text style={styles.textCod}>{cod}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.times}>
                    <Text style={styles.text}>{pais1}</Text>
                    <Text style={styles.text}> x </Text>
                    <Text style={styles.text}>{pais2}</Text>
                    <View style={styles.codigo}>
                        <Text style={styles.textCod}>{cod}</Text>
                    </View>
                </View>
            )
            }
        <View style={styles.data}>
            <Text style={styles.textData}>{dia+'/'+mes+'/'+ano}</Text>
            <Text style={styles.textData}>{hora+':00'}</Text>
        </View>
    </TouchableOpacity>
  );
}
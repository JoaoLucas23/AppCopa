import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';

interface PartidaProps {
    pais1: string | undefined;
    pais2: string | undefined;
    data: string | undefined;
    bandeira1: string | undefined;
    bandeira2: string | undefined;
}

export function Partida({pais1, pais2, data, bandeira1, bandeira2}: PartidaProps) {
 const dia = new Date(data).toLocaleDateString('pt-BR', {timeZone: 'America/Brazil/Sao_Paulo'});
 const hora = new Date(data).toLocaleTimeString('pt-BR', {timeZone: 'America/Brazil/Sao_Paulo'});
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.times}>
            <Image source={{uri: bandeira1}} style={styles.image} />
            <Text style={styles.text}>{pais1}</Text>
            <Text style={styles.text}> x </Text>
            <Text style={styles.text}>{pais2}</Text>
            <Image source={{uri: bandeira2}} style={styles.image} />
        </View>
        <View style={styles.data}>
            <Text style={styles.text}>{dia}</Text>
            <Text style={styles.text}>{hora}</Text>
        </View>
    </SafeAreaView>
  );
}
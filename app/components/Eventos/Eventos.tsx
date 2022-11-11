import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { EventoProps } from '../FooterPartida/FooterPartida';

export function Eventos(evento: EventoProps) {

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                {
                    evento.time == 'time1' &&
                    <Text style={styles.textLeft}>{evento.jogador}</Text>
                }
            </View>
            <View style={styles.containerCenter}>
                <Ionicons name={evento.icon} size={24} color="black" />
                <Text>{evento.minuto}'</Text>
            </View>
            <View style={styles.containerRight}>
                {
                    evento.time == 'time2' &&
                    <Text style={styles.textRight}>{evento.jogador}</Text>
                }
            </View>
        </View>
    );
}
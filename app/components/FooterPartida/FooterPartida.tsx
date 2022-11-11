import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import { Eventos } from '../Eventos/Eventos';
import { Escalacao } from '../Escalacao/Escalacao';

export interface EventoProps {
    id: number;
    evento: string;
    time: string;
    jogador: string;
    minuto: number;
    icon: string;
}

export interface EscalacaoProps {
    id: number;
    jogador: string;
    posicao: string;
    time: string;
}

const escalacoes =[
    {
        id: 1,
        nome: 'Goleiro',
        pos: 'GOL',
        time: 'time1',
    },
    {
        id: 2,
        nome: 'lateral',
        pos: 'LD',
        time: 'time1',
    },
    {
        id: 3,
        nome: 'zagueiro',
        pos: 'ZAG',
        time: 'time1',
    },
    {
        id: 4,
        nome: 'zafae',
        pos: 'ZAG',
        time: 'time1',
    },
    {
        id: 5,
        nome: 'lartwa',
        pos: 'LE',
        time: 'time1',
    },
    {
        id: 6,
        nome: 'Goleiro',
        pos: 'GOL',
        time: 'time2',
    },
    {
        id: 7,
        nome: 'lateral',
        pos: 'LD',
        time: 'time2',
    },
    {
        id: 8,
        nome: 'zagueiro',
        pos: 'ZAG',
        time: 'time2',
    },
    {
        id: 9,
        nome: 'zafae',
        pos: 'ZAG',
        time: 'time2',
    },
    {
        id: 10,
        nome: 'lartwa',
        pos: 'LE',
        time: 'time2',
    },
]

const eventos = [
    {
        id: 1,
        evento: 'gol',
        time: 'time1',
        jogador: 'Cristiano Ronaldo',
        minuto: 10,
        icon: 'md-football'
    },
    {
        id: 2,
        evento: 'cartao_amarelo',
        time: 'time1',
        jogador: 'Cristiano Ronaldo',
        minuto: 15,
        icon: 'md-football'
    },
    {
        id: 3,
        evento: 'cartao_vermelho',
        time: 'time1',
        jogador: 'Cristiano Ronaldo',
        minuto: 20,
        icon: 'md-football'
    },
    {
        id: 4,
        evento: 'gol',
        time: 'time2',
        jogador: 'Messi',
        minuto: 5,
        icon: 'md-football'
    },
    {
        id: 5,
        evento: 'cartao_amarelo',
        time: 'time2',
        jogador: 'Messi',
        minuto: 12,
        icon: 'md-football'
    },
    {
        id: 6,
        evento: 'cartao_vermelho',
        time: 'time2',
        jogador: 'Messi',
        minuto: 25,
        icon: 'md-football'
    },
]

interface Props {
    selected: string;
}

export function FooterPartida({selected}: Props) {
    return (
        <ScrollView style={styles.footerLive}>
            <View style={styles.selectView}>
              <Text style={styles.eventos}>EVENTOS</Text>
            </View>
            {
                selected == 'eventos' &&
                <View style={styles.eventosView}>
                <View style={styles.eventosTimes}>
                    <FlatList 
                        data={eventos.sort((a, b) => b.minuto - a.minuto)}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Eventos evento={item.evento} minuto={item.minuto} jogador={item.jogador} id={item.id}
                                time={item.time} icon={item.icon}/>
                        )}
                        vertical
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            }
        </ScrollView>
    );
}
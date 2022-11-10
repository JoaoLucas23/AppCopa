import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function FooterPartida() {


    const live = true;
    const played = false;

    if(!live && !played) return null;

    if(live || played) return (
        <View style={styles.footerLive}>
            <View style={styles.eventosView}>
                <Text style={styles.titulo}>Eventos</Text>
                <View style={styles.eventosTimes}>
                    <View style={styles.eventoTime}>
                        <View style={styles.eventoEsquerda}>
                            <Text style={styles.eventoText}>Gol</Text>
                            <Text style={styles.eventoText}>00:00</Text>
                        </View>
                    </View>
                    <View style={styles.eventoTime}>
                        <View style={styles.eventoDireita}>
                            <Text style={styles.eventoText}>00:00</Text>
                            <Text style={styles.eventoText}>Gol</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.escalacaoView}>
                <Text style={styles.titulo}>Escalação</Text>
                <View style={styles.eventosTimes}>
                    <View style={styles.eventoTime}>
                        <View style={styles.eventoEsquerda}>
                            <Text style={styles.eventoText}>Goleiro</Text>
                        </View>
                    </View>
                    <View style={styles.eventoTime}>
                        <View style={styles.eventoDireita}>
                            <Text style={styles.eventoText}>Goleiro</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}
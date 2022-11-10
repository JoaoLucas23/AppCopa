import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { HeaderPartida } from '../../components/HeaderPartida/HeaderPartida';
import { FooterPartida } from '../../components/FooterPartida/FooterPartida';

export interface PaisProps {
    bandeira: string;
    id: number;
    id_grupo: number;
    nome: string;
    sigla: string;  
    titulos: number;
}
  
export interface PartidaProps {
    data: string;
    fase: string;
    id: number;
    id_grupo: number;
    id_time_1: number;
    id_time_2: number;
    gols_time_1: number;
    gols_time_2: number;
    live: boolean;
    played: boolean;
}
  
export interface Props {
    partida: PartidaProps;
    time1: PaisProps;
    time2: PaisProps;
    live: boolean;
}

export function PaginaPartida() {
    const route = useRoute();
    const idPartida = route.params;

    const [partida, setPartida] = useState<Props>();

    useEffect(() => {
        axios.get(`http://192.168.1.7:3023/api/partidas/retornaPartidaPorId/${idPartida}`)
        .then((response) => {
          setPartida(response.data);
        });
      }, []);

      let grupo;

      switch(partida?.time1.id_grupo) {
        case 1:
            grupo = 'A';
            break;
        case 2:
            grupo = 'B';
            break;
        case 3:
            grupo = 'C';
            break;
        case 4:
            grupo = 'D';
            break;
        case 5:
            grupo = 'E';
            break;
        case 6:
            grupo = 'F';
            break;
        case 7:
            grupo = 'G';
            break;
        case 8:
            grupo = 'H';
            break;
        default:
            grupo = '';
            break;
    }

    const live = false;
    const played = false;

    console.log(partida);

    if(!partida) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partidaContainer}>
        <HeaderPartida
          partida={partida?.partida}
          time1={partida?.time1}
          time2={partida?.time2}
          live={live}
        />
        <View style={styles.infos}>
          <View style={styles.info}>
            <Text style={styles.texto}>Fase</Text>
            <Text style={styles.infoText}>{partida?.partida.fase}</Text>
          </View>
          
            {
              partida?.partida.fase == 'grupo' &&
              <View style={styles.info}>
                <Text style={styles.texto}>Grupo</Text>
                <Text style={styles.infoText}>{grupo}</Text>
              </View>
            }

            {
              partida?.partida.fase == 'grupo' &&
              <View style={styles.info}>
                <Text style={styles.texto}>Rodada</Text>
                <Text style={styles.infoText}>1</Text>
              </View>
            }
            <View style={styles.info}>
              <Text style={styles.texto}>Estadio</Text>
              <Text style={styles.infoText}>Arena Fonte Nova</Text>
            </View>
          
        </View>
          <FooterPartida />
      </View>
    </SafeAreaView>
  );
}
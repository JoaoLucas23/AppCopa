import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, Modal, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { HeaderPartida } from '../../components/HeaderPartida/HeaderPartida';
import { FooterPartida } from '../../components/FooterPartida/FooterPartida';
import { COLORS } from '../../assets/COLORS';
import { APP_URL } from '@env';


export interface PaisProps {
    bandeira: string;
    id: number;
    id_grupo: number;
    nome: string;
    sigla: string;  
    titulos: number;
}

export interface EstadioProps {
  id: number;
  nome: string;
  cidade: string;
  capacidade: number;
  foto: string;
  visible: boolean;
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
    id_estadio: number;
    live: boolean;
    played: boolean;
    rodada: number;
    Estadio: EstadioProps;
}
  
export interface Props {
    partida: PartidaProps;
    time1: PaisProps;
    time2: PaisProps;
}

export function PaginaPartida() {
    const route = useRoute();
    const idPartida = route.params;

    const [partida, setPartida] = useState<Props>();
    const [modalVisible, setModalVisible] = useState(false);

    const [eventosSelecionado, setEventosSelecionado] = useState<Boolean>(true);
    const [escalacaoSelecionado, setEscalacaoSelecionado] = useState<Boolean>(false);
    const [selectedTab, setSelectedTab] = useState('eventos');

    useEffect(() => {
        axios.get(`${APP_URL}/api/partidas/retornaPartidaPorId/${idPartida}`)
        .then((response) => {
          setPartida(response.data);
        });
      }, []);

      let grupo;

      async function handleSelection(selected: string) {
        if(selected === 'eventos') {
          setEventosSelecionado(true);
          setEscalacaoSelecionado(false);
          setSelectedTab('eventos');
        } else if(selected === 'escalacao') {
          setEventosSelecionado(false);
          setEscalacaoSelecionado(true);
          setSelectedTab('escalacao');
        }
      }

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

    if(!partida) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partidaContainer}>
        <HeaderPartida
          partida={partida?.partida}
          time1={partida?.time1}
          time2={partida?.time2}
          live={partida.partida.live}
        />
        <View style={styles.infos}>
          <View style={styles.info}>
            <Text style={styles.texto}>Fase:</Text>
            <Text style={styles.infoText}>{partida?.partida.fase}</Text>
          </View>
          
            {
              partida?.partida.fase == 'grupo' &&
              <View style={styles.info}>
                <Text style={styles.texto}>Grupo:</Text>
                <Text style={styles.infoText}>{grupo}</Text>
              </View>
            }

            {
              partida?.partida.fase == 'grupo' &&
              <View style={styles.info}>
                <Text style={styles.texto}>Rodada:</Text>
                <Text style={styles.infoText}>{partida.partida.rodada}</Text>
              </View>
            }
            <View style={styles.info}>
              <Text style={styles.texto}>Estádio:</Text>
              <Text style={styles.estadioText} onPress={()=>setModalVisible(true)}>
                {partida.partida.Estadio.nome}
              </Text>
            </View>
            
        </View>
        {
          (partida?.partida.live || partida.partida.played) &&
          <FooterPartida selected={selectedTab} />
        }
          <Modal visible={modalVisible} animationType='fade'
              onRequestClose={() => setModalVisible(false)}
              transparent={true}
              >
            <View style={styles.modalContainer}>
              <Image source={{uri: partida.partida.Estadio.foto}} style={styles.fotoEstadio}/>
              <Text style={styles.nomeEstadio}>{partida.partida.Estadio.nome}</Text>
              <View style={styles.estadioInfo}>
                  <View style={styles.infoEstadio}>
                      <Text style={styles.texto}>Cidade:</Text>
                      <Text style={styles.infoText}>{partida.partida.Estadio.cidade}</Text>
                  </View>
                  <View style={styles.infoEstadio}>
                      <Text style={styles.texto}>Capacidade:</Text>
                      <Text style={styles.infoText}>{partida.partida.Estadio.capacidade}</Text>
                  </View>
              </View>
              <TouchableOpacity style={styles.botaoFechar} onPress={()=>setModalVisible(false)}>
                  <Text style={styles.textoBotaoFechar}>Fechar</Text>
              </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
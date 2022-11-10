import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

interface PaisProps {
    bandeira: string;
    id: number;
    id_grupo: number;
    nome: string;
    sigla: string;  
    titulos: number;
}
  
interface PartidaProps {
    data: string;
    fase: string;
    id: number;
    id_grupo: number;
    id_time_1: number;
    id_time_2: number;
}
  
interface Props {
    partida: PartidaProps;
    time1: PaisProps;
    time2: PaisProps;
}

export function PaginaPartida() {
    const route = useRoute();
    const idPartida = route.params;

    const [partida, setPartida] = useState<Props>();

    useEffect(() => {
        axios.get(`http://192.168.1.7:3023/api/partidas/retornaPartidaPorId/${idPartida}`)
        .then((response) => {
          setPartida(response.data)
        });
      }, []);

      const icon = "close-outline";

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

    const dia = new Date(partida?.partida.data).getDate();
    const mes = new Date(partida?.partida.data).getMonth() + 1;
    const ano = new Date(partida?.partida.data).getFullYear();
    const hora = new Date(partida?.partida.data).getHours()-3;

    const navigation = useNavigation();

  async function handleClick(idPais: number) {
    navigation.navigate('PaisDados', idPais);
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.top}>
              <TouchableOpacity style={styles.topView} onPress={()=>handleClick(partida?.time1.id)}>
                <Image source={{uri: partida?.time1.bandeira}} style={styles.bandeira} />
                <Text style={styles.nomeTime}>{partida?.time1.nome}</Text>
              </TouchableOpacity>
              <Text style={styles.icon}>{<Ionicons name={icon} color='#838081' size={80}/>}</Text>  
              <TouchableOpacity style={styles.topView} onPress={()=>handleClick(partida?.time2.id)}>
                <Image source={{uri: partida?.time2.bandeira}} style={styles.bandeira} />
                <Text style={styles.nomeTime}>{partida?.time2.nome}</Text>
              </TouchableOpacity>
          </View> 
          <Text style={styles.data}>{dia+'/'+mes+'/'+ano+'  '+hora+':00'}</Text>
        </View>
        <View style={styles.infos}>
            <Text style={styles.texto}>Fase: {partida?.partida.fase}</Text>
            {
              partida?.partida.fase == 'grupo' &&
              <Text style={styles.texto}>Grupo: {grupo}</Text>
            }
                        {
              partida?.partida.fase == 'grupo' &&
              <Text style={styles.texto}>Rodada: 1</Text>
            }
            <Text style={styles.texto}>Estadio: </Text>

        </View>

    </SafeAreaView>
  );
}
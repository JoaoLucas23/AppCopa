import { APP_URL } from '@env';
import axios from 'axios';
import { VStack, FlatList, Button, IconButton } from 'native-base';
import React, {useState, useEffect} from 'react';
import { View,Text, Image } from 'react-native';
import { UserProps } from '../../screens/Perfil/Perfil';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props {
    Time: {
      bandeira: string;
        id: number;
        id_grupo: number;
        nome: string;
        pontos: number;
        posicao: number;
        sigla: string;
        titulos: number
      };
      id: number;
      id_time: number;
      id_usuario: number;
  }

export function TimesFavoritos(usuario: UserProps) {
    const [paisesFavoritos, setPaisesFavoritos] = useState<Props[]>([]);

    useEffect(() => {
      axios.get(`${APP_URL}/api/timesUsuarios/retornaTimesUsuarios/${usuario.id}`)
      .then(response => {
        setPaisesFavoritos(response.data);
      }).catch(error => {
        console.log(error);
      })
    }, [usuario.id]);

  return (
    <View style={styles.times}>
            <FlatList
                data={paisesFavoritos}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                    <View style={styles.time}>
                        <Image source={{uri: item.Time.bandeira}} style={styles.bandeira} />
                        <Text style={styles.text}>{item.Time.nome}</Text>
                        <Text style={styles.text}>Grupo {item.Time.id_grupo === 1 ? 'A' : item.Time.id_grupo === 2 ? 'B' : item.Time.id_grupo === 3 ? 'C' : item.Time.id_grupo === 4 ? 'D' : item.Time.id_grupo === 5 ? 'E' :item.Time.id_grupo === 6 ? 'F' : item.Time.id_grupo === 7 ? 'G' : item.Time.id_grupo === 8 ? 'H' : ''}</Text>
                    </View>
                )}
            />
    </View>
  );
}
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import {Agenda} from 'react-native-calendars';

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

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export function Calendario() {
    const [partidas, setPartidas] = useState<Props[]>([]);
    const [items, setItems] = useState({});

    let hoje = new Date();
    const [mes, setMes] = useState<number>(hoje.getMonth() + 1);

    useEffect(() => {
      axios.get(`http://192.168.137.1:3023/api/partidas//retornaPartidasPorMes/${mes}`)
      .then((response) => {
        setPartidas(response.data)
      });
    }, [mes]);

    const loadItems = () => {
      setTimeout(() => {
        const newItems = {};
        partidas.forEach((partida) => {
          const time = partida.partida.data;
          const strTime = timeToString(time);
          if (!newItems[strTime]) {
            newItems[strTime] = [];
          }
          newItems[strTime].push({
            name: partida.partida.id +':' + partida.time1.nome + 'X' + partida.time2.nome,
            height: 80,
          });
        });
        setItems(newItems);
      }, 500);
    };

    const exibeItem = (id: string) => {

      const idPartida = parseInt(id);

      const partida = partidas.find(partida => partida.partida.id === idPartida);

      const data = new Date(partida.partida.data);

      const horario = data.getHours() + ':' + '00';


        return (
          <TouchableOpacity style={styles.cardPartida}>
            <View style={styles.cardPartidaPaises}>
              <View style={styles.cardPartidaPais}>
                <Text style={styles.cardPartidaText}>{partida?.time1.nome}</Text>
                <Image source={{uri: partida?.time1.bandeira}} style={styles.bandeira}/>
              </View>
              <View style={styles.cardPartidaPais}>
                <Text style={styles.cardPartidaText}>{partida?.time2.nome}</Text>
                <Image source={{uri: partida?.time2.bandeira}} style={styles.bandeira}/>
              </View>
            </View>
            <View style={styles.cardPartidaHorario}>
              <Text style={styles.cardPartidaText}>{horario}</Text>
            </View>
          </TouchableOpacity>
        );
    }


  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={items}
        selected={hoje.toString()}
        onDayPress={day => {
          setMes(day.month);
        }}
        loadItemsForMonth={loadItems}
        renderItem={(item, firstItemInDay) => exibeItem(item.name[0])}
        renderEmptyData={() => {
          return <View />;
        }}
      />
    </SafeAreaView>
  );
}

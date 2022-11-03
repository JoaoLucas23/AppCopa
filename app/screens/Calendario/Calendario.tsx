import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import {Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Mai',
    'Jun',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

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
      axios.get(`http://192.168.1.3:3023/api/partidas//retornaPartidasPorMes/${mes}`)
      .then((response) => {
        setPartidas(response.data)
      });
    }, [mes]);

    const loadItems = async () => {
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

      const idPartida = parseInt(id.split(':')[0]);

      const partida = partidas.find(partida => partida.partida.id === idPartida);

      const data = new Date(partida.partida.data);

      const horario = (data.getHours()-3)+ ':' + '00';


        return (
          <TouchableOpacity style={styles.cardPartida}>
            <View style={styles.cardPartidaPaises}>
              <View style={styles.cardPartidaPais}>
                <Text style={styles.cardPartidaText}>{partida?.time1.nome}</Text>
                <Image source={{uri: partida?.time1.bandeira}} style={styles.bandeira}/>
              </View>
              <Text style={styles.cardPartidaText}>x </Text>
              <View style={styles.cardPartidaPais}>
                <Image source={{uri: partida?.time2.bandeira}} style={styles.bandeira}/>
                <Text style={styles.cardPartidaText}>{partida?.time2.nome}</Text>
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
        renderItem={(item, firstItemInDay) => exibeItem(item.name)}
        renderEmptyData={() => {
          return <View>
            <Text style={styles.diaVazio}>Nenhuma partida no dia selecionado!</Text>
            </View>;
        }}
        scrollEnabled={true}
        futureScrollRange={5}
        pastScrollRange={5}
        theme={{
          agendaDayTextColor: '#fff',
          agendaDayNumColor: '#fff',
          monthTextColor: '#fff',
          dayTextColor: '#fff',
          agendaKnobColor: '#D7CD86',
          dotColor: '#D7CD86',
          selectedDayBackgroundColor: '#D7CD86',
          selectedDayTextColor: 'black',
          selectedDotColor: 'black',
          todayTextColor: '#8b1638',
          backgroundColor: '#8b1638',
          calendarBackground: '#8b1638',
        }}
/>
    </SafeAreaView>
  );
}

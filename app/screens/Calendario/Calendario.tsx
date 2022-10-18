import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Partida } from '../../components/Partida/Partida';
import { styles } from './styles';
import { Calendar } from 'react-native-calendars';
import Agenda from 'react-native-calendars/src/agenda';

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

export function Calendario() {
    const [partidas, setPartidas] = useState<Props[]>([]);

    const hoje = new Date();

    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();

    const dataAtual = `${ano}-${mes}-${dia}`;
    console.log(dataAtual);

    useEffect(() => {
      axios.get(`http://192.168.0.121:3023/api/partidas/retornaTodasPartidas`)
      .then((response) => {
        setPartidas(response.data)
      });
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={partidas}
        keyExtractor={item => item.partida.id}
        renderItem={({item}) => (
          <Partida 
            idPartida={item.partida.id}
            pais1={item?.time1.nome}
            pais2={item?.time2.nome}
            data={item?.partida.data}
            bandeira1={item?.time1.bandeira}
            bandeira2={item?.time2.bandeira}
        />
        )}
        vertical
      >
      </FlatList> */}

{/* <Agenda
  // The list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key has to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={{
  }}
  // Callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={month => {
    console.log('trigger items loading');
  }}
  // Callback that fires when the calendar is opened or closed
  onCalendarToggled={calendarOpened => {
    console.log(calendarOpened);
  }}
  // Callback that gets called on day press
  onDayPress={day => {
    console.log('day pressed');
  }}
  // Callback that gets called when day changes while scrolling agenda list
  onDayChange={day => {
    console.log('day changed');
  }}
  // Initially selected day
  selected={dataAtual}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2022-10-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2022-12-31'}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={2}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={40}
  // Specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {
    return <View />;
  }}
  // Specify how each date should be rendered. day can be undefined if the item is not first in that day
  renderDay={(day, item) => {
    return <View />;
  }}
  // Specify how empty date content with no items should be rendered
  renderEmptyDate={() => {
    return <View />;
  }}
  // Specify how agenda knob should look like
  renderKnob={() => {
    return <View />;
  }}
  // Override inner list with a custom implemented component
  // renderList={listProps => {
  //   return <MyCustomList {...listProps} />;
  // }}
  // Specify what should be rendered instead of ActivityIndicator
  renderEmptyData={() => {
    return <View />;
  }}
  // Specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {
    return r1.text !== r2.text;
  }}
  // Hide knob button. Default = false
  hideKnob={false}
  // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
  showClosingKnob={false}
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
  markedDates={{
    '2022-10-18': {selected: false, marked: true},
    '2022-10-19': {marked: false},
  }}
  // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
  disabledByDefault={true}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
  refreshControl={null}
  // Agenda theme
  theme={{
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue'
  }}
  // Agenda container style
  style={{}}
/> */}

    </SafeAreaView>
  );
}
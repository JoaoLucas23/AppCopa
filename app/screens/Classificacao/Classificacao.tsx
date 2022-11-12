
import { APP_URL } from '@env';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import { Estatisticas } from '../../components/Estatisticas/Estatisticas';
import { PaisesDoGrupo } from '../PaisesGrupo/PaisesDoGrupo';
import { styles } from './styles';

export interface GrupoProps {
  id: number;
  grupo: string;
}

export function Classificacao() {

    const [grupos, setGrupos] = useState<GrupoProps[]>([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState<Boolean>(true);
    const [playoffsSelecionado, setPlayoffsSelecionado] = useState<Boolean>(false);
    const [estatisticasSelecionado, setEstatisticasSelecionado] = useState<Boolean>(false);

    useEffect(() => {
      axios.get(`${APP_URL}/api/grupos/retornaTodosGrupos/`)
      .then((response) => {
        setGrupos(response.data)
      });
    }, []);

  async function handleSelection(selected: string) {
    if(selected === 'grupos') {
      setGrupoSelecionado(true);
      setPlayoffsSelecionado(false);
      setEstatisticasSelecionado(false);
    } else if(selected === 'playoffs') {
      setGrupoSelecionado(false);
      setPlayoffsSelecionado(true);
      setEstatisticasSelecionado(false);
    } else if(selected === 'estatisticas') {
      setGrupoSelecionado(false);
      setPlayoffsSelecionado(false);
      setEstatisticasSelecionado(true);
    }
  }


  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={ {
          backgroundColor: grupoSelecionado ? COLORS.COLOR_DARK_WINE : COLORS.COLOR_GOLD,
          borderColor: grupoSelecionado ? COLORS.COLOR_GOLD : COLORS.COLOR_DARK_WINE,
          borderWidth: 0.5,
          width: '31%',
          height: 35,
          justifyContent: 'center',
          } } 
          onPress={() => handleSelection('grupos')}
          >
          <Text style={{
            color: grupoSelecionado ? COLORS.COLOR_GOLD : COLORS.COLOR_DARK_WINE,
            fontSize: 16,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>GRUPOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ {
          backgroundColor: playoffsSelecionado ? COLORS.COLOR_DARK_WINE : COLORS.COLOR_GOLD,
          borderColor: playoffsSelecionado ? COLORS.COLOR_GOLD : COLORS.COLOR_DARK_WINE,
          borderWidth: 0.5,
          width: '31%',
          height: 35,
          justifyContent: 'center',
          } } 
          onPress={() => handleSelection('playoffs')}
          >
          <Text style={{
            color: playoffsSelecionado ? COLORS.COLOR_GOLD : COLORS.COLOR_DARK_WINE,
            fontSize: 16,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
            PLAYOFFS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={ {
          backgroundColor: estatisticasSelecionado ? COLORS.COLOR_DARK_WINE : COLORS.COLOR_GOLD,
          borderColor: estatisticasSelecionado ? COLORS.COLOR_GOLD : COLORS.COLOR_DARK_WINE,
          borderWidth: 0.5,
          width: '31%',
          height: 35,
          justifyContent: 'center',
          } } 
          onPress={() => handleSelection('estatisticas')}
          >
          <Text style={{
            color: estatisticasSelecionado ? COLORS.COLOR_GOLD : COLORS.COLOR_DARK_WINE,
            fontSize: 16,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
            ESTATISTICAS
          </Text>
        </TouchableOpacity>
      </View>
      {
      (grupoSelecionado && !playoffsSelecionado && !estatisticasSelecionado) && 
        <FlatList
          data={grupos}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
          <View>
          <PaisesDoGrupo id={item.id} grupo={item.grupo} />
          </View>
          )}
          showsVerticalScrollIndicator={false}
       />
      }
      {
      (!grupoSelecionado && playoffsSelecionado && !estatisticasSelecionado) &&
        <Text> PLAYOFFS </Text>
      }
      {
      (!grupoSelecionado && !playoffsSelecionado && estatisticasSelecionado) &&
        <Estatisticas />
      }
    </SafeAreaView>
  );
}
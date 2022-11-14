import { APP_URL } from '@env';
import axios from 'axios';
import { HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import { Option } from '../../components/Option/Option';
import { PartidaPlayoffs } from '../../components/Partida Playoffs/PartidaPlayoffs';
import { Partida } from '../../components/Partida/Partida';

import { styles } from './styles';

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

  const partidasTemp = [
    {
      id: 50,
      cod: 'OF1',
      time1: 'A1',
      time2: 'B2',
    },
    {
      id: 51,
      cod: 'OF2',
      time1: 'C1',
      time2: 'D2',
    },
    {
      id: 52,
      cod: 'OF3',
      time1: 'D1',
      time2: 'C2',
    },
    {
      id: 53,
      cod: 'OF4',
      time1: 'B1',
      time2: 'A2',
    },
    {
      id: 54,
      cod: 'OF5',
      time1: 'E1',
      time2: 'F2',
    },
    {
      id: 55,
      cod: 'OF6',
      time1: 'G1',
      time2: 'H2',
    },
    {
      id: 56,
      cod: 'OF7',
      time1: 'F1',
      time2: 'E2',
    },
    {
      id: 57,
      cod: 'OF8',
      time1: 'H1',
      time2: 'G2',
    },
    {
      id: 62,
      cod: 'QF1',
      time1: 'OF5',
      time2: 'OF6',
    },
    {
      id: 63,
      cod: 'QF2',
      time1: 'OF1',
      time2: 'OF2',
    },
    {
      id: 64,
      cod: 'QF3',
      time1: 'OF7',
      time2: 'OF8',
    },
    {
      id: 65,
      cod: 'QF4',
      time1: 'OF3',
      time2: 'OF4',
    },
    {
      id: 66,
      cod: 'SF1',
      time1: 'QF2',
      time2: 'QF1',
    },
    {
      id: 67,
      cod: 'SF2',
      time1: 'QF4',
      time2: 'QF3',
    },
    {
      id: 68,
      cod: 'Disputa 3',
      time1: 'Perdedor SF1',
      time2: 'Perdedor SF2',
    },
    {
      id: 69,
      cod: 'Final',
      time1: 'SF1',
      time2: 'SF2',
    },
]

export function Playoffs() {

    const [selectedOption, setSelectedOption] = useState<'oitavas'|'quartas' | 'semis' | 'final'>('oitavas');

    const [partidas, setPartidas] = useState<Props[]>([]);

    const data = new Date();
    const inicioPlayoffs = new Date('2022-12-02');

    useEffect(() => {
        axios.get(`${APP_URL}/api/partidas/retornaPartidasPorFase/${selectedOption}`)
        .then((response) => {
          setPartidas(response.data)
        });
      }, [selectedOption]);

      function getDadosTemp(idPartida: number) {
        const partida = partidasTemp.find(partida => partida.id === idPartida);
        return partida;
      }

  return (
    <View style={styles.container}>
        <HStack bgColor={COLORS.COLOR_GOLD5} p={1} rounded="sm" mb={1.5} mt={0} w='95%' alignSelf='center' >
            <Option 
                title="Oitavas" 
                isSelected={selectedOption === 'oitavas'}
                onPress={() => setSelectedOption('oitavas')}
            />
            <Option 
                title="Quartas"
                isSelected={selectedOption === 'quartas'}
                onPress={() => setSelectedOption('quartas')}
            />   
            <Option 
                title="Semis"
                isSelected={selectedOption === 'semis'}
                onPress={() => setSelectedOption('semis')}
            />
             <Option 
                title="Final"
                isSelected={selectedOption === 'final'}
                onPress={() => setSelectedOption('final')}
             />
        </HStack>

        {
            data > inicioPlayoffs ? (
            <View style={styles.matches}>
                <FlatList
                    data={partidas}
                    keyExtractor={item => String(item.partida.id)}
                    renderItem={({item}) => (
                    <PartidaPlayoffs 
                        idPartida={item.partida.id}
                        pais1={item.time1.nome}
                        pais2={item.time1.nome}
                        data={item?.partida.data}
                        bandeira1={item?.time1.bandeira}
                        bandeira2={item?.time2.bandeira}
                        cod={getDadosTemp(item.partida.id)?.cod}
                    />
                    )}
                    vertical
                />
            </View> 
            ) : (
                <View style={styles.matches}>
                <FlatList
                    data={partidas}
                    keyExtractor={item => String(item.partida.id)}
                    renderItem={({item}) => (
                    <PartidaPlayoffs 
                        idPartida={item.partida.id}
                        pais1={getDadosTemp(item.partida.id)?.time1}
                        pais2={getDadosTemp(item.partida.id)?.time2}
                        data={item?.partida.data}
                        bandeira1={item?.time1.bandeira}
                        bandeira2={item?.time2.bandeira}
                        cod={getDadosTemp(item.partida.id)?.cod}
                    />
                    )}
                    vertical
                />
            </View> 
            )
        }
    </View>
  );
}
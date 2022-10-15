import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { JogadoresPais } from '../../components/JogadoresPais';

import { styles } from './styles';

interface dadosProps {
    id: number;
    id_time: number;
    quantidade_jogos: number;
    gols_feitos: number;
    gols_sofridos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    posicao_grupo: number;
}

interface Props {
    DadosTime: dadosProps;
    bandeira: string;
    id: number;
    id_grupo: number;
    nome: string;
    sigla: string;
    titulos: number;
}

export function PaisDados() {
    const route = useRoute();
    const param = route.params;

    const idString = `${param}`;
    const id = parseInt(idString);

    const [Pais, setPais] = useState<Props>();

    useEffect(() => {
        axios.get(`http://192.168.100.11:3023/api/times/retornaTimeComDado/${id}`)
        .then((response) => {
            setPais(response.data)
        });
      }, []);

      let grupo;


      switch(Pais?.id_grupo) {
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


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.pais} >
            <Image source={{uri: Pais?.bandeira}} style={styles.bandeira}/>
            <Text style={styles.nomePais}>{Pais?.nome}</Text>
            <View style={styles.paisInfo}>
                <Text style={styles.info}>Títulos: {Pais?.titulos}</Text>
                <Text style={styles.info}>Grupo: {grupo}</Text>
            </View>
        </View>
        <View style={styles.dadosTime}>
            <Text style={styles.title}>Dados</Text>
            <View style={styles.dados}>
                <View style={styles.infos} >
                    <Text style={styles.info}>Posicao no grupo</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.posicao_grupo}º</Text>
                </View>
                <View style={styles.infos} >
                    <Text style={styles.info}>Gols Feitos</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.gols_feitos}</Text>
                </View>
                <View style={styles.infos} >
                    <Text style={styles.info}>Gols Sofridos</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.gols_sofridos}</Text>
                </View>
                <View style={styles.infos} >
                    <Text style={styles.info}>Jogos</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.quantidade_jogos}</Text>
                </View>
                <View style={styles.infos} >
                    <Text style={styles.info}>Vitórias</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.vitorias}</Text>
                </View>
                <View style={styles.infos} >
                    <Text style={styles.info}>Empates</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.empates}</Text>
                </View>
                <View style={styles.infos} >
                    <Text style={styles.info}>Derrotas</Text>
                    <Text style={styles.info}>{Pais?.DadosTime.derrotas}</Text>
                </View>
            </View>
        </View>
        <View style={styles.jogadores}>
            <Text style={styles.title}>Jogadores</Text>
            <JogadoresPais id={id}/>
        </View>
    </SafeAreaView>
  );
}
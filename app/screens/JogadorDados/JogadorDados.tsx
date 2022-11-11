import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import axios from 'axios';
import { PaisProps } from '../../components/Pais/Pais';

export interface JogadorProps {
    id: number;
    nome: string;
    data_nascimento: Date;
    posicao: string;
    time: string;
    id_time: number;
    foto: string;
    altura: number;
    pe: string;
    apelido: string;
}

export interface DadosJogadorProps {
    id: number;
    id_jogador: number;
    quantidade_jogos: number;
    gols_feitos: number;
    gols_sofridos: number;
    assistencias: number;
    cartoes_amarelos: number;
    cartoes_vermelhos: number;
    defesas: number;
    desarmes: number;
    faltas_cometidas: number;
    faltas_sofridas: number;
    nota_media: number;
}

export function JogadorDados() {
    const route = useRoute();
    const param = route.params;

    const idString = `${param}`;
    const id = parseInt(idString);

    const [Jogador, setJogador] = useState<JogadorProps>();
    const [Pais, setPais] = useState<PaisProps>();
    const [DadosJogador, setDadosJogador] = useState<DadosJogadorProps>();


    useEffect(() => {
        axios.get(`http://192.168.0.121:3023/api/jogadores/retornaJogadorPorId/${id}`)
        .then((response) => {
            setJogador(response.data)
        });
      }, []);

      useEffect(() => {
        axios.get(`http://192.168.0.121:3023/api/times/retornaTime/${Jogador?.id_time}`)
        .then((response) => {
            setPais(response.data)
        });
      }, [Jogador]);

      useEffect(() => {
        axios.get(`http://192.168.0.121:3023/api/jogadores/retornaDadosPorIdJogador/${id}`)
        .then((response) => {
            setDadosJogador(response.data)
        });
      }, []);

      const pe = Jogador?.pe === 'direito' ? 'Destro' : Jogador?.pe === 'esquerdo' ? 'Canhoto' : 'Ambidestro';
      const idade = new Date().getFullYear() - new Date(Jogador?.data_nascimento).getFullYear();

      const nota = DadosJogador?.nota_media.toFixed(2);

    const COR = nota === '10.00' ? '#57d129' : nota >= '9.00' ? '#81d129' : nota >= '8.00' ? '#a6d129' : nota >= '7.00' ? '#bfd129' : nota >= '6.00' ? '#d0d129' : nota >= '5.00' ? '#d1bb29' : nota >= '4.00' ? '#d19129' : nota >= '3.00' ? '#d17229' : nota >= '2.00' ? '#d15029' : nota >= '1.00' ? '#ff0000' : '#000000';

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.jogadorContainer}>
            <View style={styles.jogadorInfo}>
                <Image source={{uri: Jogador?.foto}} style={styles.fotoJogador}/>
                <View style={styles.nomeJogadorView}>
                    <Text style={styles.nomeJogador}>{Jogador?.nome}</Text>
                    <Image source={{uri: Pais?.bandeira}} style={styles.bandeira}/>
                </View>
                <View style={styles.infos}>
                    <Text style={styles.infoText}>{Jogador?.posicao}</Text>
                    <Text style={styles.infoText}>{idade} anos</Text>
                    <Text style={styles.infoText}>{Jogador?.altura} cm</Text>
                    <Text style={styles.infoText}>{pe}</Text>
                </View>
            </View>
            <View style={styles.jogadorDados}>
                <Text style={styles.title}>Estatísticas do jogador</Text>
                <View style={styles.estatisticas}>
                    <View style={styles.categorias}>
                        <Text style={styles.categoria}>Gerais</Text>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Jogos</Text>
                            <Text style={styles.dados}>{DadosJogador?.quantidade_jogos}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Nota média</Text>
                            <Text style={styles.dados}>{DadosJogador?.nota_media}</Text>
                        </View>
                    </View>
                    <View style={styles.categorias}>
                        <Text style={styles.categoria}>Ataque</Text>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Gols Feitos</Text>
                            <Text style={styles.dados}>{DadosJogador?.gols_feitos}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Assistências</Text>
                            <Text style={styles.dados}>{DadosJogador?.assistencias}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Faltas Sofridas</Text>
                            <Text style={styles.dados}>{DadosJogador?.faltas_sofridas}</Text>
                        </View>
                    </View>
                    <View style={styles.categorias}>
                        <Text style={styles.categoria}>Defesa</Text>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Gols Sofridos</Text>
                            <Text style={styles.dados}>{DadosJogador?.gols_sofridos}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Defesas</Text>
                            <Text style={styles.dados}>{DadosJogador?.defesas}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Desarmes</Text>
                            <Text style={styles.dados}>{DadosJogador?.desarmes}</Text>
                        </View>
                    </View>
                    <View style={styles.categorias}>
                        <Text style={styles.categoria}>Disciplina</Text>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Faltas Cometidas</Text>
                            <Text style={styles.dados}>{DadosJogador?.faltas_cometidas}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Cartões Amarelos</Text>
                            <Text style={styles.dados}>{DadosJogador?.cartoes_amarelos}</Text>
                        </View>
                        <View style={styles.dadosView}>
                            <Text style={styles.dadosText}>Cartões Vermelhos</Text>
                            <Text style={styles.dados}>{DadosJogador?.cartoes_vermelhos}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}
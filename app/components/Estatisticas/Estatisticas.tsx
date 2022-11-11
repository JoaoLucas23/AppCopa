import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { JogadorProps, DadosJogadorProps } from '../../screens/JogadorDados/JogadorDados';
import { styles } from './styles';

interface Props {
    DadosJogador: DadosJogadorProps;
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
    stat: number | null;
}

export function Estatisticas() {

    const [jogadores, setJogadores] = useState<Props[]>([]);
    const [ordenacao, setOrdenacao] = useState('quantidade_jogos');
    const [ord, setOrd] = useState('DESC');


    useEffect(() => {
        axios.get(`http://192.168.1.7:3023/api/jogadores/retornaJogadoresComDados/${ordenacao}/${ord}`)
        .then((response) => {
          setJogadores(response.data);
        });
    }, [ordenacao, ord]);

    async function handleOrdenacao() {
        if (ord === 'DESC') {
            setOrd('ASC');
        } else {
            setOrd('DESC');
        }
    }

    if (jogadores.length === 0) return null;

    let pos = 0;

    function getStat(jogador: Props, ordenacao: string) {
        if (ordenacao === 'quantidade_jogos') {
            return jogador.DadosJogador.quantidade_jogos;
        } else if (ordenacao === 'gols_feitos') {
            return jogador.DadosJogador.gols_feitos;
        } else if (ordenacao === 'gols_sofridos') {
            return jogador.DadosJogador.gols_sofridos;
        } else if (ordenacao === 'assistencias') {
            return jogador.DadosJogador.assistencias;
        }
        return 0;
    }

  return (
    <View style={styles.container}>
        <View style={styles.ordenacoes}>
            <SelectDropdown 
                data={[{id: 1, value: 'jogadores'}, {id: 2, value: 'paises'}]}
                onSelect={(selectedItem, index) => {
                    setOrdenacao(selectedItem.value);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.value;
                }}
                rowTextForSelection={(item, index) => {
                    return item.value;
                }}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                renderDropdownIcon={() => {
                    return (
                        <View style={styles.dropdownIcon}>
                            <Text style={styles.dropdownIconText}>▼</Text>
                        </View>
                    );
                }}
                dropdownIconPosition={'right'}
                defaultValueByIndex={0}
            />
            <SelectDropdown 
                data={[{id: 1, value: 'quantidade_jogos'}, {id: 2, value: 'gols_feitos'}, {id: 3, value: 'gols_sofridos'}, {id: 4, value: 'assistencias'}]}
                onSelect={(selectedItem, index) => {
                    setOrdenacao(selectedItem.value);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.value;
                }}
                rowTextForSelection={(item, index) => {
                    return item.value;
                }}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                renderDropdownIcon={() => {
                    return (
                        <View style={styles.dropdownIcon}>
                            <Text style={styles.dropdownIconText}>▼</Text>
                        </View>
                    );
                }}
                dropdownIconPosition={'right'}
                defaultValueByIndex={0}
            />
        </View>
        <View style={styles.list}>
            <View style={styles.tableTitles}>
                <Text style={styles.text}>POS</Text>
                <Text style={styles.text}>Jogador</Text>
                <Text style={styles.text} onPress={() => handleOrdenacao()}>{ordenacao}</Text>
            </View>
            <FlatList 
                data={jogadores}
                keyExtractor={item => String(item.nome)}
                renderItem={({item}) => (
                    <View style={styles.jogador}>
                        <Text style={styles.posicaoText}>{pos+=1}</Text>
                        <Text style={styles.jogadorText}>{item.apelido}</Text>
                        {
                            <Text style={styles.dadoText}>{getStat(item, ordenacao)}</Text>
                        }
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                vertical
            />
        </View>
    </View>
  );
}
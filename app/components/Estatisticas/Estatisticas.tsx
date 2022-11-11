import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { DadosJogadorProps } from '../../screens/JogadorDados/JogadorDados';
import { styles } from './styles';

interface JProps {
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

interface EstatisticasProps {
    id: number;
    id_time: number;
    quantidade_jogos: number;
    gols_feitos: number;
    gols_sofridos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
}

interface PProps {
    DadosTime: EstatisticasProps;
    bandeira: string;
    id: number;
    id_grupo: number;
    nome: string;
    sigla: string;  
    titulos: number;
}

const opcoesJogador = [{id: 1, value: 'quantidade_jogos'}, {id: 2, value: 'assistencias'}, {id: 3, value: 'gols_feitos'}, {id: 4, value: 'gols_sofridos'}, {id: 5, value: 'defesas'},{id: 6, value: 'desarmes'},{id:7, value: 'cartoes_amarelos'},{id:8, value: 'cartoes_vermelhos'},{id:9, value: 'faltas_cometidas'},{id:10, value: 'faltas_sofridas'}];

const opcoesPais = [{id: 1, value: 'quantidade_jogos'}, {id: 2, value: 'gols_feitos'}, {id: 3, value: 'gols_sofridos'}, {id: 4, value: 'vitorias'}, {id: 5, value: 'empates'},{id: 6, value: 'derrotas'}];

export function Estatisticas() {

    const [jogadores, setJogadores] = useState<JProps[]>([]);
    const [paises, setPaises] = useState<PProps[]>([]);
    const [pesquisa, setPesquisa] = useState('jogadores');
    const [ordenacao, setOrdenacao] = useState('quantidade_jogos');
    const [ord, setOrd] = useState('DESC');
    let pos = 0;

    useEffect(() => {
        if(pesquisa == 'paises') {
            axios.get(`http://192.168.0.121:3023/api/times/retornaPaisesComDados/${ordenacao}/${ord}`)
            .then((response) => {
                setPaises(response.data);
        });
        }
        else {
            axios.get(`http://192.168.0.121:3023/api/jogadores/retornaJogadoresComDados/${ordenacao}/${ord}`)
            .then((response) => {
                setJogadores(response.data);
            });
        }
    }, [pesquisa, ordenacao, ord]);

    async function handleOrdenacao() {
        if (ord === 'DESC') {
            setOrd('ASC');
        } else {
            setOrd('DESC');
        }
    }
    
    if (jogadores.length === 0 && paises.length === 0) return null;

    function getStatJogador(jogador: JProps, ordenacao: string) {
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
    function getStatPais(pais: PProps, ordenacao: string) {
        if (ordenacao === 'quantidade_jogos') {
            return pais.DadosTime.quantidade_jogos;
        } else if (ordenacao === 'gols_feitos') {
            return pais.DadosTime.gols_feitos;
        } else if (ordenacao === 'gols_sofridos') {
            return pais.DadosTime.gols_sofridos;
        } else if (ordenacao === 'vitorias') {
            return pais.DadosTime.vitorias;
        } else if (ordenacao === 'empates') {
            return pais.DadosTime.empates;
        } else if (ordenacao === 'derrotas') {
            return pais.DadosTime.derrotas;
        }
        return 0;
    }

  return (
    <View style={styles.container}>
        <View style={styles.ordenacoes}>
            <SelectDropdown 
                data={[{id: 1, value: 'jogadores'}, {id: 2, value: 'paises'}]}
                onSelect={(selectedItem, index) => {
                    setPesquisa(selectedItem.value);
                    setOrdenacao('quantidade_jogos');
                    pos=0;
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
            {
                pesquisa === 'jogadores' && 
                <SelectDropdown 
                    data={opcoesJogador}
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
            }
            {
                pesquisa === 'paises' && 
                <SelectDropdown 
                    data={opcoesPais}
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
            }
        </View>
        <View style={styles.list}>
            <View style={styles.tableTitles}>
                <Text style={styles.text}>POS</Text>
                <Text style={styles.text}>Jogador</Text>
                <Text style={styles.text} onPress={() => handleOrdenacao()}>{ordenacao}</Text>
            </View>
            {
                pesquisa === 'jogadores' &&
                <FlatList 
                    data={jogadores}
                    keyExtractor={item => String(item.nome)}
                    renderItem={({item}) => (
                        <View style={styles.jogador}>
                            <Text style={styles.posicaoText}>{pos+=1}</Text>
                            <Text style={styles.jogadorText}>{item.apelido}</Text>
                            {
                                <Text style={styles.dadoText}>{getStatJogador(item, ordenacao)}</Text>
                            }
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    vertical
                />
            }
            {
                pesquisa === 'paises' &&
                <FlatList 
                    data={paises}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <View style={styles.jogador}>
                            <Text style={styles.posicaoText}>{pos+=1}</Text>
                            <Text style={styles.jogadorText}>{item.nome}</Text>
                            {
                                <Text style={styles.dadoText}>{getStatPais(item, ordenacao)}</Text>
                            }
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    vertical
                />
            }
        </View>
    </View>
  );
}
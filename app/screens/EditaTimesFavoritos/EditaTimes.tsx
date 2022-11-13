import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, Image, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, FlatList, IconButton, NativeBaseProvider } from 'native-base';
import { PaisProps } from '../PaginaPartida/PaginaPartida';
import axios from 'axios';
import { APP_URL } from '@env';
import { COLORS } from '../../assets/COLORS';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';

export function EditaTimes() {
    const route = useRoute();
    const idUsuario = route.params;

    const [paises, setPaises] = useState<PaisProps[]>([]);
    const [selected, setSelected] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [paisesSelecionados, setPaisesSelecionados] = useState<number[]>();

    useEffect(() => {
        const getPaises = async () => 
        {
            axios.get(`${APP_URL}/api/times/retornaTodosTimes/`)
            .then(response => {
                setPaises(response.data);
            })
        }
        getPaises()
        .catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        const getTimesUsuario = async () =>
        {
            axios.get(`${APP_URL}/api/timesUsuarios/retornaTimesUsuarios/${idUsuario}`)
            .then(response => {
                handleTimesUsuario(response.data);
            })
        }
        getTimesUsuario()
        .catch(error => {
            console.log(error);
        })
    }, []);
    
    const navigator = useNavigation();

    async function handleTimesUsuario(response: any) {
        setPaisesSelecionados(response);
        const lista = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i = 0; i < response.length; i++) {
            lista[response[i].id] = 1;
        }
        setSelected(lista);
    }

    async function handleNavigation() {
            const body = {
                listaTimes: paisesSelecionados,
            };
            await axios.post(`${APP_URL}/api/timesUsuarios/editaTimesUsuario/${idUsuario}`, body);
            navigator.navigate('Perfil');
    }

    async function handlePress(idPais: number) {
        selected[idPais] = selected[idPais] === 0 ? 1 : 0;
        setSelected([...selected]);
        console.log(paisesSelecionados);
        if(selected[idPais] === 1) {
            paisesSelecionados.push(idPais);
            setPaisesSelecionados(paisesSelecionados);
        }
        else {
            const index = paisesSelecionados.indexOf(idPais);
            if (index > -1) {
                paisesSelecionados.splice(index, 1);
                setPaisesSelecionados(paisesSelecionados);
            }
        }
    }

  return (
    <NativeBaseProvider>    
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.tituloView}>
                    <Text style={styles.titulo}>Selecione suas seleções favoritas</Text>
                </View>
                <View style={styles.footer}>
                    <FlatList 
                        data={paises}
                        keyExtractor={item => String(item.id)}
                        renderItem={({item}) => (
                            <View style={styles.paisView}>
                                <Image source={{uri: item.bandeira}} style={styles.bandeira}/>
                                <Text style={styles.paisText}>{item.nome}</Text>
                                <IconButton
                                    icon={<Ionicons name={selected[item.id] ? "md-checkmark" : "add"} size={20}/>}
                                    style={styles.iconButton}
                                    onPress={() => handlePress(item.id)}
                                />
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 20}}
                    />
                    <View style={styles.buttonView}>
                    <Button style={styles.button} variant="outline" size="md" backgroundColor={COLORS.COLOR_GOLD4}
                        startIcon={<Ionicons name="md-checkmark" size={20} color={COLORS.COLOR_BLACK} />}
                        onPress={() => handleNavigation()}
                        >
                        <Text style={styles.text}>Confirmar seleção</Text>
                    </Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </NativeBaseProvider>   
  );
}
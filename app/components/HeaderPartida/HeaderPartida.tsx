import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Props } from '../../screens/PaginaPartida/PaginaPartida';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import React, {useEffect, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export function HeaderPartida({partida, time1, time2, live}: Props) {

    const played = false;

    const [minutos, setMinutos] = useState(0);

    const navigation = useNavigation();
    async function handleClick(idPais: number) {
      navigation.navigate('PaisDados', idPais);
    }

    const dia = new Date(partida.data).getDate();
    const mes = new Date(partida.data).getMonth() + 1;
    const ano = new Date(partida.data).getFullYear();
    const hora = new Date(partida.data).getHours()-3;
    const data= dia+'/'+mes+'/'+ano+'  -  '+hora+':00';
    const icon = "close-outline";

    useEffect(() => {
        const interval = setInterval(() => {
            setMinutos(minutos => minutos + 1);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    if (live) {
        return (
            <View style={styles.header}>
                 <View style={styles.top}>
                    <TouchableOpacity style={styles.topView} onPress={()=>handleClick(time1.id)}>
                        <Image source={{uri: time1.bandeira}} style={styles.bandeira} />
                        <Text style={styles.nomeTime}>{time1.nome}</Text>
                    </TouchableOpacity>
                    <Text style={styles.placar}>{0}</Text>
                    <Text style={styles.placar}>{0}</Text>  
                    <TouchableOpacity style={styles.topView} onPress={()=>handleClick(time2.id)}>
                        <Image source={{uri: time2.bandeira}} style={styles.bandeira} />
                        <Text style={styles.nomeTime}>{time2.nome}</Text>
                    </TouchableOpacity>
                </View> 
                <Text style={styles.data}>{minutos}'</Text>
            </View>
        )
    } 
    if (played) {
        return (
            <View style={styles.header}>
                 <View style={styles.top}>
                    <TouchableOpacity style={styles.topView} onPress={()=>handleClick(time1.id)}>
                        <Image source={{uri: time1.bandeira}} style={styles.bandeira} />
                        <Text style={styles.nomeTime}>{time1.nome}</Text>
                    </TouchableOpacity>
                    <Text style={styles.placar}>{0}</Text>
                    <Text style={styles.placar}>{0}</Text>  
                    <TouchableOpacity style={styles.topView} onPress={()=>handleClick(time2.id)}>
                        <Image source={{uri: time2.bandeira}} style={styles.bandeira} />
                        <Text style={styles.nomeTime}>{time2.nome}</Text>
                    </TouchableOpacity>
                </View> 
                <Text style={styles.data}>{data}</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.header}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.topView} onPress={()=>handleClick(time1.id)}>
                        <Image source={{uri: time1.bandeira}} style={styles.bandeira} />
                        <Text style={styles.nomeTime}>{time1.nome}</Text>
                    </TouchableOpacity>
                    <Text style={styles.icon}>{<Ionicons name={icon} color='#000' size={60}/>}</Text> 
                    <TouchableOpacity style={styles.topView} onPress={()=>handleClick(time2.id)}>
                        <Image source={{uri: time2.bandeira}} style={styles.bandeira} />
                        <Text style={styles.nomeTime}>{time2.nome}</Text>
                    </TouchableOpacity>
                </View> 
                <Text style={styles.data}>{data}</Text>
          </View>
        );
    }
}

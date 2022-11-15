import { SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { COLORS } from '../../assets/COLORS';
import {HStack, IconButton, NativeBaseProvider} from 'native-base';
import { Option } from '../../components/Option/Option';
import React, {useState, useEffect} from 'react';
import { TimesFavoritos } from '../../components/TimesFavoritos/TimesFavoritos';
import { Boloes } from '../../components/Boloes/Boloes';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { APP_URL } from '@env';

export interface UserProps {
    nome: string;
    email: string;
    id: number;
    image: string;
}

const image = 'person-circle-outline';

export function Perfil() {

  const [usuario, setUsuario] = useState<UserProps>();

  useEffect(() => {
    axios.get(APP_URL+'/api/usuarios/usuarioLogado')
    .then((response) => {
        setUsuario(response.data);
    })
    .catch((error) => {
        console.log(error);
    } );
  }, []);

  const navigator = useNavigation();

   function handleNavigation() {
      navigator.navigate('EditaPerfil', usuario.id);
   }

   function handleLogout() {
      axios.post(APP_URL+'/api/usuarios/logout')
      .then((response) => {
          console.log(response.data);
          navigator.navigate('Login');
      })
      .catch((error) => {
          console.log(error);
      }
      );
   }

   if (!usuario) return null;

  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.editView}>
            <IconButton icon={<Ionicons name='create-outline' size={25} />} onPress={() => handleNavigation()}/>
            <Text>Editar perfil</Text>  
          </View>
          <View style={styles.sairView}>
            <Text>Sair</Text>
            <IconButton icon={<Ionicons name="log-out-outline" size={25}/>} onPress={() => handleLogout()}/>
          </View>
        </View>
         {
            usuario.nome.length <= 15 ? (
              <View style={styles.perfil}>
                <Ionicons name={image} size={40} style={styles.fotoUsuario}/>
                <Text style={styles.nomeUsuario}>{usuario.nome}</Text>
              </View>
            ) : (
              <View style={styles.perfil}>
                <Ionicons name={image} size={40} style={styles.fotoUsuario}/>
                <Text style={styles.nomeUsuario2}>{usuario.nome}</Text>
                <IconButton icon={<Ionicons name='create-outline' size={20} style={styles.fotoUsuario}
                color={COLORS.COLOR_GREY3} onPress={() => handleNavigation()}/>}/>
              </View>
            )
          }
            <TimesFavoritos 
              id={usuario.id}
              image={image}
              nome={usuario.nome}
              email={usuario.email}
            />
      </View>
    </SafeAreaView>
  </NativeBaseProvider>
  );
}
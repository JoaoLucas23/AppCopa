import React, { Context, useContext } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { FormControl, Input, NativeBaseProvider } from 'native-base';
import axios from 'axios';
import { APP_URL } from '@env';


interface UserProps {
    nome: string;
    email: string;
    senha: string;
  }

  
type Props = {
    auth: () => any;
  };
  
export function Login({auth}: Props) {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');


    async function handleLogin() {
        const user = {
            email,
            senha,
        }
            await axios.post(APP_URL+'/api/usuarios/login', user)
            .then((response) => {
                console.log(response.data);
                auth();
            })
            .catch((error) => {
                console.log(error);
            } );
    }

  return (
    <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.inputView}>
                <Text style={styles.loginText}>LOGIN</Text>
                <FormControl>
                    <FormControl.Label _text={{color: COLORS.COLOR_BLACK, fontSize: 14, fontWeight: 'bold'}}>Email</FormControl.Label>
                    <Input onChangeText={text => setEmail(text)}
                        placeholder="digite seu email" 
                        type='text'
                        keyboardType='email-address'
                        bgColor={COLORS.COLOR_GOLD7}
                        borderColor={COLORS.COLOR_GOLD5}
                        _focus={{ borderColor: COLORS.COLOR_GOLD }}    
                    />
                    <FormControl.Label _text={{color: COLORS.COLOR_BLACK, fontSize: 14, fontWeight: 'bold'}}>Senha</FormControl.Label>
                    <Input onChangeText={text => setSenha(text)}
                        placeholder="digite sua senha" 
                        type='password'
                        bgColor={COLORS.COLOR_GOLD7}
                        borderColor={COLORS.COLOR_GOLD5}
                        _focus={{ borderColor: COLORS.COLOR_GOLD }} 
                    />
                </FormControl>
                <View style={styles.loginButton}>
                    <Button 
                        icon="login"
                        mode='elevated'
                        buttonColor={COLORS.COLOR_DARK_WINE}
                        textColor={COLORS.COLOR_WHITE}
                        onPress={() => handleLogin()}
                    >
                        Entrar
                    </Button>
                </View>
                <View style={styles.cadastro}>
                    <Text style={styles.cadastroText}>Não possui cadastro?</Text>
                    <Text style={styles.linkCadastro} onPress={()=>console.log("CADASTRO")}>Cadastre-se</Text>
                </View>
            </View>
        </SafeAreaView>
    </NativeBaseProvider>
  );
}
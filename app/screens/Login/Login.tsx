import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

export function Login() {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const loginHandler = () => {
        console.log(email, senha);
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputView}>
            <Text style={styles.loginText}>LOGIN</Text>
            <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.inputText}
                placeholder="digite seu email"
                placeholderTextColor={COLORS.COLOR_DARK_WINE}
                textColor={COLORS.COLOR_BLACK}
                selectionColor={COLORS.COLOR_BLACK}
                underlineColor={COLORS.COLOR_BLACK}
                mode="outlined"
                outlineColor={COLORS.COLOR_GOLD}
                activeOutlineColor={COLORS.COLOR_BLACK}
                activeUnderlineColor={COLORS.COLOR_BLACK}
            />
            <TextInput 
                onChangeText={text => setSenha(text)}
                style={styles.inputText}
                placeholder="digite sua senha"
                placeholderTextColor={COLORS.COLOR_DARK_WINE}
                secureTextEntry={true}
                textColor={COLORS.COLOR_BLACK}
                selectionColor={COLORS.COLOR_BLACK}
                underlineColor={COLORS.COLOR_BLACK}
                mode="outlined"
                outlineColor={COLORS.COLOR_GOLD}
                activeOutlineColor={COLORS.COLOR_BLACK}
                activeUnderlineColor={COLORS.COLOR_BLACK}
            />
            <View style={styles.loginButton}>
                <Button 
                    icon="login"
                    mode='elevated'
                    buttonColor={COLORS.COLOR_DARK_WINE}
                    textColor={COLORS.COLOR_WHITE}
                    onPress={() => loginHandler()}
                >
                    Entrar
                </Button>
            </View>
            <View style={styles.cadastro}>
                <Text style={styles.cadastroText}>Não possui cadastro?</Text>
                <Text style={styles.linkCadastro} onPress={()=>console.log("CADASTRO")}>Cadastre-se</Text>
            </View>
        </View>
        <View style={styles.googleView}>
            <View style={styles.googleButton}>
                <Button 
                    icon="google"
                    mode='elevated'
                    buttonColor={COLORS.COLOR_WHITE}
                    textColor={COLORS.COLOR_WINE}
                    onPress={() => loginHandler()}
                >
                Entrar com Google
            </Button>
            </View>
        </View>
    </SafeAreaView>
  );
}
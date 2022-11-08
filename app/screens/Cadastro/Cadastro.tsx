import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { COLORS } from '../../assets/COLORS';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Cadastro() {

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [body, setBody] = useState<{}>({});

  const navigation = useNavigation();

  function handleCadastro() {
    setBody({
      nome: nome,
      email: email,
      senha: senha,
    });
    console.log(body);
  }

  useEffect(() => {
    axios.post('http://192.168.1.7:3023/api/usuarios/criarUsuario', body)
    .then((response) => {
      console.log(response.data);
      confirmaCadastro();
    });
  }, [body]);

  function confirmaCadastro() {
    alert('Cadastro realizado com sucesso!');
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.formContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Text style={styles.formTitle}>Cadastre-se</Text>
          <View style={styles.forms}>
            <TextInput placeholder='insira seu nome' label='Nome' textContentType='name' style={styles.formInput} mode='outlined' activeOutlineColor={COLORS.COLOR_DARK_WINE} outlineColor={COLORS.COLOR_WINE} onChangeText={text => setNome(text)}/>
            <TextInput placeholder='exemplo@email.com' label='Email' textContentType='emailAddress' style={styles.formInput} mode='outlined' activeOutlineColor={COLORS.COLOR_DARK_WINE} outlineColor={COLORS.COLOR_WINE} onChangeText={text => setEmail(text)}/>
            <TextInput placeholder='insira sua senha' label='Senha' textContentType='password' style={styles.formInput} mode='outlined' activeOutlineColor={COLORS.COLOR_DARK_WINE} outlineColor={COLORS.COLOR_WINE} onChangeText={text => setSenha(text)}/>
          </View>
        <View style={styles.formButton}>
          <Button 
            mode='outlined' textColor={COLORS.COLOR_WHITE} buttonColor={COLORS.COLOR_WINE}
            onPress={() => handleCadastro()}
            >
            Cadastrar
          </Button>
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
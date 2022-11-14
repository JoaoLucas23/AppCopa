import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, FormControl, Input, NativeBaseProvider } from 'native-base';
import React, {useEffect, useState} from 'react';
import { Text, TextInput, View } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface UserProps {
    name: string;
    image: string;
    id: number;
    email: string;
    senha: string;
}

const usuario : UserProps = {
  name: 'Gabriel Valadao Meira',
  id: 6,
  image: 'person-circle-outline',
  email: 'email@email.com',
  senha: 'senha123',
}


export function EditaPerfil() {
    const params = useRoute().params;
    const userId = params?.userId;

    const [nome, setNome] = useState<string>(usuario.name);
    const [email, setEmail] = useState<string>(usuario.email);
    const [senha, setSenha] = useState<string>(usuario.senha);
    const [body, setBody] = useState<{}>({});
  
    const navigation = useNavigation();
  
    function handleCadastro() {
      setBody({
        nome: nome,
        email: email,
        senha: senha,
      });
    }

  return (
    <NativeBaseProvider>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Edite suas informações</Text>
                </View>
                <View style={styles.forms}>
                    <FormControl>
                        <FormControl.Label _text={{color: COLORS.COLOR_BLACK, fontSize: 'sm', fontWeight: 600}}>
                            Nome
                        </FormControl.Label>
                        <Input placeholder='insira seu nome' textContentType='name' style={styles.formInput} onChangeText={text => setNome(text)} defaultValue={nome} height={60} mb={5} borderColor={COLORS.COLOR_GOLD2} bgColor={COLORS.COLOR_GOLD7} InputLeftElement={<Ionicons name="person" size={20} style={styles.icon}/>} />
                        <FormControl.Label _text={{color: COLORS.COLOR_BLACK, fontSize: 'sm', fontWeight: 600}}>
                            Email
                        </FormControl.Label>
                        <Input placeholder='exemplo@email.com' style={styles.formInput} onChangeText={text => setEmail(text)} defaultValue={email} height={60} mb={5} borderColor={COLORS.COLOR_GOLD2} bgColor={COLORS.COLOR_GOLD7} InputLeftElement={<Ionicons name="at-outline" size={20} style={styles.icon}/>}/>
                        <FormControl.Label _text={{color: COLORS.COLOR_BLACK, fontSize: 'sm', fontWeight: 600}}>
                            Senha
                        </FormControl.Label>
                        <Input placeholder='insira sua senha' style={styles.formInput} onChangeText={text => setSenha(text)}
                        defaultValue={senha} type='password' height={60} mb={5} borderColor={COLORS.COLOR_GOLD2} bgColor={COLORS.COLOR_GOLD7} InputLeftElement={<Ionicons name="lock-closed-outline" size={20} style={styles.icon}/>}
                        />
                    </FormControl>
                </View>
                <View style={styles.buttonView}>
                    <Button variant="outline" size="md" backgroundColor={COLORS.COLOR_GOLD4}
                        startIcon={<Ionicons name="md-checkmark" size={20} color={COLORS.COLOR_BLACK} />}
                        onPress={() => console.log("AS")}
                        >
                            <Text style={styles.buttonText}>Confirmar seleção</Text>
                    </Button>
                </View>
            </View>
        </View>
    </NativeBaseProvider>
  );
}
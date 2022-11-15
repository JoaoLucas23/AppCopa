
import { SafeAreaView } from 'react-native';
import { Routes } from './routes';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './assets/COLORS';
import React, { createContext, useState } from 'react';
import { Login } from './screens/Login/Login';

interface UserProps {
  nome: string;
  email: string;
  senha: string;
}

const AuthContext = createContext<UserProps | null>(null);

export default function App() {

  const [logado, setLogado] = useState(false);

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.COLOR_WHITE}/>
        {
          <Routes /> 
        }
      </SafeAreaView>
  );
}

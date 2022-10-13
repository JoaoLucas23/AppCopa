import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Routes } from './routes';
import { Home } from './screens/Home/Home';
import { Paises } from './screens/Paises/Paises';
import { styles } from './styles';

export default function App() {
  return (
    <Routes />
  );
}

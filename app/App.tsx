
import { SafeAreaView } from 'react-native';
import { Routes } from './routes';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='dark-red' style='auto' />
      <Routes />
    </SafeAreaView>
  );
}

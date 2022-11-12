
import { SafeAreaView } from 'react-native';
import { Routes } from './routes';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './assets/COLORS';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.COLOR_GREY}/>
      <Routes />
    </SafeAreaView>
  );
}

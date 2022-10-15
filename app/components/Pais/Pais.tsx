import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export interface PaisProps {
    id: number;
    nome: string;
    sigla: string;
    titulos: number;
    grupo: string;
    bandeira: string;
    id_grupo: number;
}

interface Props {
  data: PaisProps;
}

export function Pais({data}: Props) {

  const navigation = useNavigation();

  function handleClick(id: number) {
    navigation.navigate('PaisDados', id);
  }

  return (
    <TouchableOpacity style={styles.container} 
      onPress={() => {handleClick(data.id)}}
    >
        <Image  source={{uri: data.bandeira}} style={styles.image} /> 
        <Text style={styles.text}>{data.nome}</Text>
    </TouchableOpacity>
  );
}
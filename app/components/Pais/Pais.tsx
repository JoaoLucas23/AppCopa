import { Image, ImageBackground, Text, View } from 'react-native';

import { styles } from './styles';

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
  return (
    <View style={styles.container}>
        <Image  source={{uri: data.bandeira}} style={styles.image} /> 
        <Text style={styles.text}>{data.nome}</Text>
    </View>
  );
}
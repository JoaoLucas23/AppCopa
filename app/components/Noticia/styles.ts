import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
      container: {
        padding: 1,
        height: Dimensions.get('window').height*0.4,
      },
      imagem: {
        width: Dimensions.get('window').width*0.85,
        height: '90%',
      },
      text: {
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: '20%',
        position: 'absolute',
        justifyContent: 'flex-end',
      },
      textTitle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 1,
      },
      titulo: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
      },
});
import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
      },
      top: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      },
      topView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      nomeTime: {
        fontSize: 20,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
        marginTop: 10,
      },
      texto: {
        height: 40,
        padding: 10,
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
      },
      data: {
        color: COLORS.COLOR_BLACK,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        alignSelf: 'center'
      },
      icon: {
        marginTop: 10,
        marginHorizontal: 10,
      },
      bandeira: {
        width: 100,
        height: 80,
        borderRadius: 8,
        alignSelf: 'center',
      },
      headerLive: {
        width: '100%',
      },
      placar: {
        fontSize: 30,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginVertical: 20,
      }
});

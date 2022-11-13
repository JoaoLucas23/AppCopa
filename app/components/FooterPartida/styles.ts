import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    footerLive: {
        width: '100%',
        flex: 1,
    },
    eventosView: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    selectView: {
        width: '100%',
        marginTop: 5,
      },
      eventos: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
      },
});
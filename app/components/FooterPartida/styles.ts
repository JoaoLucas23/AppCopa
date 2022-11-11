import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    footerLive: {
        width: '100%',
    },
    eventosView: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 10,
        paddingVertical: 5,
    },
    eventosTimes: {
        width: '100%',
        flexDirection: 'row',
    },
    eventoTime: {
        width: '50%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    eventoEsquerda: {
        flexDirection: 'row',
        padding: 5,
        position: 'absolute',
        left: 5,
    },
    eventoDireita: {
        flexDirection: 'row',
        padding: 5,
        position: 'absolute',
        right: 5,
    },
    eventoText: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
    },
    footerPlayed: {
        width: '100%',
        marginTop: 10,
    },
    escalacaoView: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 30,
        marginBottom: 10,
    },
    selectView: {
        width: '100%',
        marginTop: 5,
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 0.5,
      },
      eventos: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
      },
});
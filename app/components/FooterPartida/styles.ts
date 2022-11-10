import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    footerLive: {
        width: '100%',
        marginTop: 10,
        borderTopColor: COLORS.COLOR_GOLD,
        borderTopWidth: 1.5,
    },
    eventosView: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: 10,
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
    titulo: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    footerPlayed: {
        width: '100%',
        marginTop: 10,
        borderTopColor: COLORS.COLOR_GOLD,
        borderTopWidth: 1.5,
    },
    escalacaoView: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 30,
        marginBottom: 10,
    },
});
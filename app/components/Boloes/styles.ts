import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    boloes: {
        width: '100%',
        alignSelf: 'center',
        padding: 15,
    },
    boloesContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    bolao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 45,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: COLORS.COLOR_GREY,
        borderColor: COLORS.COLOR_DARK_GOLD,
        borderWidth: 1,
    },
    nomeBolao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.COLOR_DARK_WINE,
        alignSelf: 'center',
        padding: 10,
    },
    semBoloesText: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 5,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tituloView: {
        flexDirection: 'row',
        width: '100%',
    },
    icon: {
        marginTop: -5,
    },
});
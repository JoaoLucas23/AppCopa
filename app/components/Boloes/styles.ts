import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    boloes: {
        flex: 1,
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    boloesContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    bolao: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: COLORS.COLOR_GOLD7,
        borderRadius: 6,
        borderBottomColor: COLORS.COLOR_GREY2,
        borderBottomWidth: 2,
        marginBottom: 8,
    },
    nomeBolao: {
        fontSize: 18,
        color: COLORS.COLOR_BLACK,
    },
    semBoloesText: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 5,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginVertical: 8,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginTop: 5,
    },
    buttonText1: {
        fontSize: 12,
        color: COLORS.COLOR_GOLD3,
        fontWeight: 'bold',
    },
    buttonText2: {
        fontSize: 12,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
    },
    tituloView: {
        display: 'flex',
        alignSelf: 'center',
        marginVertical: 5,
    },
    titulo: {
        fontSize: 20,
    }
});
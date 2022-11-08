import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.COLOR_WINE,
        paddingVertical: 15,
    },
    perfil: {
        flex: 0.3,
        alignSelf: 'center',
        backgroundColor: COLORS.COLOR_GREY,
        width: '95%',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        borderColor: COLORS.COLOR_GOLD,
        borderWidth: 3,
    },
    nomeUsuario: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.COLOR_DARK_WINE,
        textAlign: 'center',
    },
    fotoUsuario: {
        alignSelf: 'center',
        marginTop: 15,
    },
    times: {
        flex: 0.15,
        backgroundColor: COLORS.COLOR_GREY,
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 15,
    },
    timesContainer: {
        backgroundColor: COLORS.COLOR_GREY,
        flexDirection: 'row',
        marginTop: 10,
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginRight: 20,
    },
    nomeTime: {
        fontSize: 20,
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
    },
    fotoTime: {
        alignSelf: 'center',
    },
    boloes: {
        flex: 0.55,
        backgroundColor: COLORS.COLOR_GREY,
        width: '95%',
        alignSelf: 'center',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        padding: 15,
    },
    bolaoContainer: {
        flexDirection: 'column',
    },
    bolao: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: 50,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: COLORS.COLOR_DARK_WINE,
    },
    nomeBolao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.COLOR_WHITE,
        alignSelf: 'center',
        padding: 15,
    },
    titulo: {
        fontSize: 20,
    }
});
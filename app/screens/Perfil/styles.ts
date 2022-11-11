import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.COLOR_WINE,
        paddingVertical: 15,
    },
    card: {
        width: '95%',
        flex: 0.9,
        backgroundColor: COLORS.COLOR_GREY,
        borderRadius: 20,
        alignSelf: 'center',
        borderColor: COLORS.COLOR_GOLD,
        borderWidth: 2,
        marginTop: 10,
    },
    perfil: {
        width: '100%',
        alignSelf: 'center',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 2,
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
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 15,
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 2,
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
        backgroundColor: COLORS.COLOR_GREY,
        width: '100%',
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
        width: '100%',
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
        fontWeight: 'bold',
    },
    titulo2: {
        fontSize: 16,
        color: COLORS.COLOR_DARK_WINE,
        textAlign: 'center',
        marginTop: 20,
    },
    botoes: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    botao: {
        width: '48%',
    }
});
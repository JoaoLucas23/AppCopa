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
        flex: 0.99,
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
    },
    bandeira: {
        width: 50,
        height: 35,
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
    },
    timesContainer: {
        backgroundColor: COLORS.COLOR_GREY,
        flexDirection: 'column',
        marginTop: 10,
    },
    time: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titulo2: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 20,
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 0.75,
        width: '75%',
    },
    botoes: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    botao: {
        width: '48%',
    },
    botaoTime: {
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
    }
});
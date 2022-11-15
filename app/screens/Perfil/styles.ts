import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.COLOR_WINE,
        padding: 12,
    },
    card: {
        paddingBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: COLORS.COLOR_GREY,
        borderWidth: 2,
        borderColor: COLORS.COLOR_GOLD,
        borderRadius: 20,
        alignSelf: 'center',
        flex: 1,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        top: 0,
    },
    editView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sairView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tituloView: {
        flexDirection: 'row',
        width: '100%',
    },
    icon: {
        marginTop: -5,
    },
    perfil: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 0.75,
        height: 70,
    },
    bandeira: {
        width: 50,
        height: 35,
    },
    nomeUsuario: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
        textAlignVertical: 'center',
        padding: 10,
        marginTop: 8,
    },
    nomeUsuario2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
        textAlignVertical: 'center',
        padding: 10,
        marginTop: 5,
    },
    fotoUsuario: {
        alignSelf: 'center',
        marginTop: 5,
    },
    button: {
        width: '45%',
    },
    times: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 15,
    },
    timesContainer: {
        backgroundColor: COLORS.COLOR_GREY,
        flexDirection: 'column',
        marginTop: 5,
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
    },
});
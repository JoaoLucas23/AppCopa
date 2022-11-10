import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.COLOR_WINE,
        justifyContent: 'center',
    },
    jogadorContainer: {
        width: '95%',
        flex: 0.95,
        backgroundColor: COLORS.COLOR_GREY,
        borderRadius: 20,
        alignSelf: 'center',
        borderColor: COLORS.COLOR_GOLD,
        borderWidth: 2,
    },
    jogadorInfo: {
        padding: 10,
        width: '100%',
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 2,
    },
    fotoJogador: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: COLORS.COLOR_GOLD,
        borderWidth: 1,
        alignSelf: 'center',
    },
    nomeJogador: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.COLOR_WINE,
        alignSelf: 'center',
        marginVertical: 10,
    },
    infos: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
    },
    infoText: {
        marginTop: 5,
        fontSize: 14,
    },
    jogadorDados: {
        padding: 10,
        width: '100%',
    },
    estatisticas: {
        width: '100%',
        flexDirection: 'column',
    },
    dadosView: {
        width: '100%',
        flexDirection: 'row',
        padding: 2,
    },
    dadosText: {
        fontSize: 14,
        color: COLORS.COLOR_BLACK,
        position: 'relative',
        left: 5,
    },
    dados: {
        fontSize: 18,
        color: COLORS.COLOR_BLACK,
        position: 'absolute',
        right: 5,
    },
    bandeira: {
        width: 20,
        height: 14,
        alignSelf: 'center',
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 3,
    },
    nomeJogadorView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.COLOR_WINE,
        alignSelf: 'center',
        marginBottom: 5,
    },
    categorias: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginVertical: 5,
        borderColor: COLORS.COLOR_GOLD,
        borderWidth: 0.5,
    },
    categoria: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
        borderBottomColor: COLORS.COLOR_GOLD,
        borderBottomWidth: 0.5,
    },
});
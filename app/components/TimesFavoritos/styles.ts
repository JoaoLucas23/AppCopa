import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    times: {
        flex: 1,
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    botaoView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
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
    bandeira: {
        width: 40,
        height: 30,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 18,
        color: COLORS.COLOR_BLACK,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 8,
    },
    buttonText2: {
        fontSize: 12,
        color: COLORS.COLOR_BLACK,
        fontWeight: 'bold',
    },
});
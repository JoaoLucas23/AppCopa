import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.COLOR_WINE,
        justifyContent: 'center',
    },
    formContainer: {
        flex: 0.55,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: COLORS.COLOR_GREY,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: COLORS.COLOR_GOLD,
    },
    formInput: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    formTitle: {
        fontSize: 24,
        marginTop: 10,
        alignSelf: 'center',
        fontWeight: '500',
        color: COLORS.COLOR_BLACK,
    },
    forms: {
        padding: 10,
    },
    formButton: {
        width: '70%',
        height: 50,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    },
});
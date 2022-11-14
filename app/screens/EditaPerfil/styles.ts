import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.COLOR_WINE,
        padding: 12,
    },
    card: {
        padding: 16,
        backgroundColor: COLORS.COLOR_GREY,
        borderWidth: 2,
        borderColor: COLORS.COLOR_GOLD,
        borderRadius: 20,
        alignSelf: 'center',
        flex: 1,
        width: '100%',
    },
    titleView: {
        marginBottom: 16,

    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: COLORS.COLOR_BLACK,
        alignSelf: 'center',
    },
    forms: {
    },
    formInput: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    icon: {
        marginLeft: 10,
    },
    buttonView: {
        marginTop: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
});
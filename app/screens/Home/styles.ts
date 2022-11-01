import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8b1638',
    },
    news: {
        flex: 0.4,
        borderBottomColor: COLORS.COLOR_DARK_WINE,
        borderBottomWidth: 2,
        borderRadius: 10,
    },
    matches: {
        flex: 0.6,
        borderBottomColor: COLORS.COLOR_DARK_WINE,
        borderBottomWidth: 2,
        borderRadius: 10,
    },
    titles: {
        fontSize: 30,
        paddingHorizontal: 10,
        color: COLORS.COLOR_WHITE,
        fontWeight: '900',
    }
});
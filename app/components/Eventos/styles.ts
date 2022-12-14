import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: COLORS.COLOR_GOLD4,
    borderBottomWidth: 0.5,
    height: 55,
  },
    containerLeft: {
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
        left: 0,
        justifyContent: 'center',
    },
    containerCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    containerRight: {
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
        right: 0,
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center',
    },
    textLeft: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        position: 'relative',
        left: 5,
    },
    textRight: {
        fontSize: 16,
        color: COLORS.COLOR_BLACK,
        position: 'absolute',
        right: 5,
    }
});
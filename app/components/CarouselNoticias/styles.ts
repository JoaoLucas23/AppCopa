import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '45%',
    borderBottomColor: COLORS.COLOR_WINE,
    borderBottomWidth: 1,
  },
  titles: {
    fontSize: 30,
    position: 'relative',
    top: 0,
    left: 10,
    color: COLORS.COLOR_BLACK,
    fontWeight: 'bold',
  },
});
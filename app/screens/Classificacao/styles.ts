import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',
    width: '100%',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '31%',
    height: 35,
    backgroundColor: COLORS.COLOR_GOLD,
    justifyContent: 'center',
  },
  headerText: {
    color: COLORS.COLOR_DARK_WINE,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
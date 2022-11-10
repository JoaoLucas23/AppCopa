import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.COLOR_GOLD,
    borderRadius: 8,
    marginTop: 5,
  },
  foto: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginLeft: 5,
    alignSelf: 'center',
  },
  nome: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  pos: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
    right: 15,
    position: 'absolute',
  }
});
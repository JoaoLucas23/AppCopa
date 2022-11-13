import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginBottom: 8,
    width: '90%',
    height: 50,
  },
  pais: {
    width: '100%',
    flexDirection: 'row',
  },
  pontuacao: {
    right: 0,
    position: 'absolute',
  },
  textPonto: {
    fontSize: 20,
  },
  image:{
    width: 60,
    height: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.COLOR_DARK_WINE,
    marginLeft: 15,
    alignSelf: 'center',
  },
});
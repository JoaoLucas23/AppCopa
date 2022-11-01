import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  pais: {
    width: '90%',
    flexDirection: 'row',
  },
  pontuacao: {
    right: 10,
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
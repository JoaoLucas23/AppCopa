import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WINE,
    width: '100%', 
  },
  ordenacoes: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  buttonStyle: {
    width: '48%',
    height: 35,
  },
  buttonTextStyle: {
    fontSize: 16,
  },
  list: {
    flex: 0.9,
    width: '95%',
    backgroundColor: COLORS.COLOR_GREY,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: COLORS.COLOR_GOLD,
    borderWidth: 2,
  },
  tableTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginBottom: 5,
  },
  text: {
    color: COLORS.COLOR_WINE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  jogador: {
    width: '95%',
    height: 40,
    borderBottomColor: COLORS.COLOR_GOLD,
    borderBottomWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 5,
    justifyContent: 'space-evenly',
  },
  posicaoText: {
    color: COLORS.COLOR_BLACK,
    fontSize: 18,
    position: 'absolute',
    left: 10,
    top: 7,
  },
  jogadorText: {
    color: COLORS.COLOR_BLACK,
    fontSize: 18,
    position: 'absolute',
    left: 50,
    top: 7,
  },
  dadoText: {
    color: COLORS.COLOR_BLACK,
    fontSize: 20,
    position: 'absolute',
    right: 10,
    top: 7,
  },
});
import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    width: '100%', 
  },
  ordenacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
  },
  buttonStyle: {
    width: '48%',
    height: 35,
    backgroundColor: COLORS.COLOR_GOLD4,
    borderRadius: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.COLOR_GREY2,
    borderLeftWidth: 0.55,
    borderLeftColor: COLORS.COLOR_GREY2,
    borderRightWidth: 0.5,
    borderRightColor: COLORS.COLOR_GREY2,
    borderTopWidth: 0.25,
    borderTopColor: COLORS.COLOR_GREY2,
    marginBottom: 10,
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.COLOR_GOLD7,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.COLOR_GREY2,
    borderLeftWidth: 0.75,
    borderLeftColor: COLORS.COLOR_GREY2,
    borderRightWidth: 0.75,
    borderRightColor: COLORS.COLOR_GREY2,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.COLOR_GREY2,
  },
  tableTitles: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 7,
    borderBottomColor: COLORS.COLOR_GREY2,
    borderBottomWidth: 0.5,
  },
  text1: {
    color: COLORS.COLOR_WINE,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: 2.5,
    bottom: 3,
  },
  text2: {
    color: COLORS.COLOR_WINE,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'relative',
    left: 50,
    bottom: 3,
  },
  text3: {
    color: COLORS.COLOR_WINE,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    right: 2.5,
    bottom: 3,
  },
  jogador: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginBottom: 7,
    width: '90%',
    height: 45,
  },
  posicaoText: {
    color: COLORS.COLOR_BLACK,
    fontSize: 18,
    position: 'absolute',
    left: 5,
    top: 5,
  },
  jogadorText: {
    color: COLORS.COLOR_BLACK,
    fontSize: 18,
    position: 'absolute',
    left: 50,
    top: 5,
  },
  dadoText: {
    color: COLORS.COLOR_BLACK,
    fontSize: 20,
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
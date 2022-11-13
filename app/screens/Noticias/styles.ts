import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WINE,
    padding: 12,
  },
  card: {
    padding: 12,
    backgroundColor: COLORS.COLOR_GREY,
    borderWidth: 2,
    borderColor: COLORS.COLOR_GOLD,
    borderRadius: 20,
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  textPesquisa: {
    height: '75%',
    borderRadius: 15,
    fontSize: 14,
    color: COLORS.COLOR_BLACK,
    alignSelf: 'center',
    width: '100%',
  },
  noticia: {
    backgroundColor: COLORS.COLOR_GOLD7,
    width: '100%',
    height: 106,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    borderBottomColor: COLORS.COLOR_GREY2,
    borderBottomWidth: 1.5,
    borderLeftColor: COLORS.COLOR_GREY2,
    borderLeftWidth: 0.75,
    borderRightColor: COLORS.COLOR_GREY2,
    borderRightWidth: 0.75,
    borderTopColor: COLORS.COLOR_GREY2,
    borderTopWidth: 0.5,
  },
  imagemNoticia: {
    width: '30%',
    height: '90%',
    padding: 5,
    alignSelf: 'center',
    marginLeft: 5,
  },
  textoNoticia: {
    padding: 5,
    fontSize: 16,
    width: '70%',
  },
  textoDescricao: {
    padding: 5,
    fontSize: 14,
    width: '70%',
  },
  fonteNoticia: {
    fontSize: 12,
    color: COLORS.COLOR_BLACK,
    position: 'absolute',
    bottom: 5, 
    right: 5,
  },
});
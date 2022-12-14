import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WINE,
    padding: 12,
  },
  partidaContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.COLOR_GREY,
    borderWidth: 2,
    borderColor: COLORS.COLOR_GOLD,
    borderRadius: 20,
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  infos: {
    width: '100%',
    borderTopWidth: 1.5,
    borderTopColor: '#D7CD86',
    flexDirection: 'column',
    marginTop: 10,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.COLOR_BLACK,
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
  texto: {
    fontSize: 16,
    color: COLORS.COLOR_BLACK,
    position: 'relative',
    alignSelf: 'center',
    left: 0,
  },
  estadioText: {
    fontSize: 17,
    color: COLORS.COLOR_DARK_WINE,
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
  modalContainer: {
    backgroundColor: COLORS.COLOR_GREY,
    borderColor: COLORS.COLOR_GOLD,
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    height: '55%',
    alignSelf: 'center',
    marginTop: '20%',
  },
  fotoEstadio: {
    width: '90%',
    height: '55%',
    alignSelf: 'center',
    position: 'absolute',
    top: '3%',
    borderRadius: 8,
  },
  nomeEstadio: {
    fontSize: 20,
    color: COLORS.COLOR_DARK_WINE,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    top: '60%',
  },
  estadioInfo: {
    flexDirection: 'column',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '70%',
  },
  infoEstadio: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  botaoFechar: {
    width: '33%',
    height: '7%',
    alignSelf: 'center',
    backgroundColor: COLORS.COLOR_DARK_WINE,
    borderRadius: 10,
    position: 'absolute',
    bottom: '2%',
  },
  textoBotaoFechar: {
    fontSize: 16,
    color: COLORS.COLOR_WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '3%',
  },
  titulo: {
    fontSize: 16,
    color: COLORS.COLOR_BLACK,
    fontWeight: 'bold',
    alignSelf: 'center',
},
});
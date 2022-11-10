import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WINE,
    justifyContent: 'center',
  },
  paisContainer: {
    width: '95%',
    flex: 0.95,
    backgroundColor: COLORS.COLOR_GREY,
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: COLORS.COLOR_GOLD,
    borderWidth: 2,
  },
  pais: {
    marginTop: 15,
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  nomePais: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#8b1638',
  },
  bandeira: {
    alignSelf: 'center',
    width: 180,
    height: 120,
    borderRadius: 8,
  },
  paisInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dados: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  infos: {
    width: '33%',
  },
  info: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'center',
  },
  title: {
    color: '#8b1638',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dadosTime: {
    borderTopColor: '#D7CD86',
    borderTopWidth: 3,
    padding: 10,
  },
  jogadores: {
    flex: 0.9,
    borderTopColor: '#D7CD86',
    borderTopWidth: 3,
    padding: 10,
  }
});
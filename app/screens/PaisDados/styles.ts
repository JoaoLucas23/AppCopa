import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#EDEEE4',

  },
  pais: {
    flex: 0.3,
    marginTop: 50,
    alignSelf: 'center',
  },
  nomePais: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#8b1638',
  },
  bandeira: {
    width: 180,
    height: 120,
  },
  paisInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dados: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infos: {
    alignItems: 'center',
    margin: 10,
  },
  info: {
    color: 'black',
    fontSize: 14,
  },
  title: {
    color: '#8b1638',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dadosTime: {
    flex: 0.25,
    borderTopColor: '#D7CD86',
    borderTopWidth: 3,
    padding: 10,
  },
  jogadores: {
    flex: 0.45,
    borderTopColor: '#D7CD86',
    borderTopWidth: 3,
    padding: 10,
  }
});
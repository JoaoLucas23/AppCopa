import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',
  },
  cardPartida: {
    backgroundColor: '#fff',
    height: 65,
    marginTop: 25,
    flexDirection: 'column',
  },
  cardPartidaPaises: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 5,
  },
  cardPartidaText: {
    fontSize: 16,
    color: '#000',
  },
  cardPartidaPais: {
    flexDirection: 'row',	
    marginRight: 10,
  },
  bandeira: {
    width: 20,
    height: 15,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  cardPartidaHorario: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    left: 5,
    bottom: 5,
  },
  diaVazio: {
    color: '#000',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  }
});
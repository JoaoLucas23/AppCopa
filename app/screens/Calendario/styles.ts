import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',
  },
  cardPartida: {
    backgroundColor: '#fff',
    height: 65,
    marginTop: 10,
    flexDirection: 'row',
  },
  cardPartidaPaises: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 15,
    width: '55%'
  },
  cardPartidaText: {
    fontSize: 16,
    color: '#000',
  },
  cardPartidaPais: {
    width: '100%',
    flexDirection: 'row',	
    alignItems: 'center',
  },
  bandeira: {
    width: 20,
    height: 15,
    marginLeft: 10,
    position: 'absolute',
    right: 0,
  },
  cardPartidaHorario: {
    position: 'absolute',
    right: 0,
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
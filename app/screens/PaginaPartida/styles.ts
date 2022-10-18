import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',
  },
  header: {
    flex: 0.3,
    width: '100%',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  infos: {
    flex: 0.7,
    width: '100%',
    borderTopWidth: 1.5,
    borderTopColor: '#D7CD86',
    padding: 10,
  },
  bandeira: {
    width: 100,
    height: 80,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  nomeTime: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  texto: {
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  data: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center'
  }
});
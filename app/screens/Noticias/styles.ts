import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',    
  },
  carroselNoticias: {
    flex: 1,
    marginTop: 20,
  },
  textPesquisa: {
    height: '75%',
    borderRadius: 15,
    fontSize: 14,
    color: '#000',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '90%',
  },
  noticia: {
    backgroundColor: '#fff',
    width: '95%',
    height: 100,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
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
  fonteNoticia: {
    fontSize: 12,
    color: '#000',
    position: 'absolute',
    bottom: 5, 
    right: 5,
  },
});
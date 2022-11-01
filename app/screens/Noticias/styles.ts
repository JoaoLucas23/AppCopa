import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',    
  },
  pesquisa:{
    marginTop: 10,
    width: '90%',
    flex: 0.05,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
  },
  filtros: {
    flex: 0.075,
    padding: 10,
  },
  carroselNoticias: {
    flex: 0.85,
  },
  textPesquisa: {
    height: '100%',
    fontSize: 14,
    color: '#000',
    alignSelf: 'center',
    marginLeft: 10,
  },
  noticia: {
    backgroundColor: '#fff',
    width: '95%',
    height: 100,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
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
  botaoFiltro: {
    width: '100%',
  }
});
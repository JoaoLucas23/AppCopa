import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',    
  },
  // pesquisa:{
  //   marginTop: 10,
  //   width: '100%',
  //   flex: 0.075,
  //   alignSelf: 'center',
  // },
  // filtros: {
  //   flex: 0.1,
  // },
  carroselNoticias: {
    flex: 1,
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
  // botaoFiltro: {
  //   width: '90%',
  //   alignSelf: 'center',
  // }
});
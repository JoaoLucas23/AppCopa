import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
    alignSelf: 'center',
    padding: 15,
  },
  times: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  data: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center',
  },
  image: {
    width: 25,
    height: 15,
    marginHorizontal: 20,
    marginTop: 15,
  }
});
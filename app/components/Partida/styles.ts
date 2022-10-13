import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
    alignSelf: 'center',
    padding: 10,
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
  },
  text: {
    color: 'black',
  },
  image: {
    width: 25,
    height: 15,
    marginHorizontal: 20,
  }
});
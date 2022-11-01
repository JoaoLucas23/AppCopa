import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 80,
    backgroundColor: COLORS.COLOR_GREY,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  times: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 15,
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  textData: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    marginRight: 20,
    marginBottom: 10,
  },
  image: {
    width: 25,
    height: 15,
    marginHorizontal: 5,
    marginTop: 18,
  }
});
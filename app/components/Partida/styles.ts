import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: COLORS.COLOR_GOLD7,
    borderRadius: 6,
    borderBottomColor: COLORS.COLOR_GREY2,
    borderLeftColor: COLORS.COLOR_GREY2,
    borderRightColor: COLORS.COLOR_GREY2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    marginBottom: 8,
  },
  times: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
  },
  textData: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    marginRight: 20,
  },
  image: {
    width: 25,
    height: 15,
    marginHorizontal: 8,
    marginTop: 4,
  }
});
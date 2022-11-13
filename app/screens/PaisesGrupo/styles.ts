import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    height: 280,
    backgroundColor: COLORS.COLOR_GOLD7,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.COLOR_GREY2,
    borderLeftWidth: 0.75,
    borderLeftColor: COLORS.COLOR_GREY2,
    borderRightWidth: 0.75,
    borderRightColor: COLORS.COLOR_GREY2,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.COLOR_GREY2,
    borderRadius: 16,
    borderStyle: 'solid',
    marginBottom: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: COLORS.COLOR_WINE,
    fontWeight: '600',
  },
  text2: {
    fontSize: 14,
    color: COLORS.COLOR_WINE,
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor:'#D7CD86',
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center'
  }
});
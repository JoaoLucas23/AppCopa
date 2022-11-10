import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b1638',
  },
  partidaContainer: {
    width: '95%',
    flex: 0.95,
    backgroundColor: COLORS.COLOR_GREY,
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: COLORS.COLOR_GOLD,
    borderWidth: 2,
    marginTop: 10,
  },
  infos: {
    width: '100%',
    borderTopWidth: 1.5,
    borderTopColor: '#D7CD86',
    flexDirection: 'column',
    marginTop: 10,
  },
  info: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.COLOR_BLACK,
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  texto: {
    fontSize: 16,
    color: COLORS.COLOR_BLACK,
    position: 'relative',
    left: 10,
  },
});
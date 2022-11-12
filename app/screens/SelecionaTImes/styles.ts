import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WINE,
    padding: 12,
  },
  card: {
    padding: 16,
    backgroundColor: COLORS.COLOR_GREY,
    borderWidth: 2,
    borderColor: COLORS.COLOR_GOLD,
    borderRadius: 20,
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  skipView: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  skip: {
    fontSize: 12,
    marginBottom: -8,
  },
  tituloView: {
    alignSelf: 'center',
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paisView: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.COLOR_GOLD7,
    borderRadius: 6,
    borderBottomColor: COLORS.COLOR_GREY2,
    borderBottomWidth: 2,
    marginBottom: 8,
  },
    paisText: {
        fontSize: 20,
        textAlign: 'left',

    },
    bandeira: {
        width: 40,
        height: 30,
        alignSelf: 'flex-start',
        marginRight: 15,
    },
    iconButton: {
        position: 'absolute',
        right: 0,
    },
    buttonView: {
        width: '100%',
        display: 'flex',
        marginTop: 15,
    },
    footer: {
        flex: 1,
    },
    button: {
      width: '100%',
      borderRadius: 8,
      marginTop: 5,
      marginBottom: 8,
    },
    text: {
      fontSize: 12,
      color: COLORS.COLOR_BLACK,
      fontWeight: 'bold',
    }
});
import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WINE,
    alignItems: 'center',
    padding: 12,
  },
  inputView: {
    flex: 1,
    padding: 16,
    width: '100%',
    backgroundColor: COLORS.COLOR_WHITE,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.COLOR_GOLD,
  },
  loginText: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: '500',
    color: COLORS.COLOR_BLACK,
  },
  inputText: {
    width: '90%',
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: COLORS.COLOR_GREY,
  },
    loginButton: {
        width: '70%',
        height: 50,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 20,
    },
    cadastro: {
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    cadastroText: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.COLOR_DARK_WINE,
        marginBottom: 10,
    },
    linkCadastro: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.COLOR_DARK_WINE,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: COLORS.COLOR_DARK_WINE,
    },
    googleView: {
        marginTop: 20,
        justifyContent: 'center',
    },
    googleButton: {
        width: '70%',
        height: 60,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 20,
    },
});
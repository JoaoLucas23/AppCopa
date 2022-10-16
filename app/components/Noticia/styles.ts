import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: '100%',
        paddingTop: 10,
        paddingHorizontal: 5,

      },
      imagem: {
        width: '100%',
        height: '95%',
      },
      text: {
        width: '100%',
        marginLeft: 5,
        top: 0,
        left: 0,
        right: 0,
        bottom: '10%',
        position: 'absolute',
        justifyContent: 'flex-end',
      },
      textTitle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
      titulo: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
      },
});
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#8b1638',
      flex: 1,
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
    },
  });
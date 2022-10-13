import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  function handlePageSelect(page: string) {
    navigation.navigate(page);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
}
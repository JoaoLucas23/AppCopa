import React from 'react';
import { FlatList, View } from 'react-native';
import { GrupoProps } from '../../screens/Classificacao/Classificacao';
import { PaisesDoGrupo } from '../../screens/PaisesGrupo/PaisesDoGrupo';

import { styles } from './styles';


export function Grupos(grupos: GrupoProps[]) {
  return (
    <FlatList
        data={grupos}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
        <View>
        <PaisesDoGrupo id={item.id} grupo={item.grupo} />
        </View>
        )}
        vertical
        showsVerticalScrollIndicator={false}
    />
  );
}
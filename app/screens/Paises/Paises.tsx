import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Pais, PaisProps } from '../../components/Pais/Pais';

import { styles } from './styles';



export function Paises() {

    const defaultPais = {
        id: 100,
        nome: 'Default',
        sigla: 'DFT',
        titulos: 0,
        grupo: 'J',
        bandeira: '',
        id_grupo: 9,
    }

    const [pais, setPais] = useState<PaisProps>(defaultPais);

    useEffect(() => {
      fetch('http://192.168.1.4:3333/times/retornaTime/1')
        .then(response => response.json())
        .then(data => setPais(data));
    }, []);
    
  return (
    <Pais data={pais} />
  );
}
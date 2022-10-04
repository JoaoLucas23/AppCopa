import axios from 'axios';
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
      axios.get('http://192.168.1.5:3023/api/times/retornaTime/1')
      .then((response) => {
        setPais(response.data)
      });
    }, []);
    
  return (
    <Pais data={pais} />
  );
}
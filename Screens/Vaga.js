import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Vaga_v1 from '../src/components/Button_v1';
import Vaga_v2 from '../src/components/button_v2';
import Vaga_v3 from '../src/components/button_v3';
import Vaga_v4 from '../src/components/button_v4';
import Vaga_v5 from '../src/components/button_v5';
import Vaga_v6 from '../src/components/button_v6';
import Linha_meio_vaga from '../src/components/linha_meio_vaga';
import Vaga_v9 from '../src/components/buttom_v9';
import Vaga_v10 from '../src/components/button_v10';
import Vaga_v11 from '../src/components/button_v11';
import Vaga_v12 from '../src/components/button_v12';
import Vaga_v13 from '../src/components/button_v13';
import Vaga_v14 from '../src/components/button_v14';

import Button_confirmar_vagas from '../src/components/button_confirmar_vagas';

import Text_vagas from '../src/components/Text_vagas';
import Caixa_vagas from '../src/components/Caixa_vagas';


export default function Vaga() {
    return (
        <View style={{backgroundColor: '#171616', height: '100%',}}>
             <Caixa_vagas/>
            <Text_vagas/>     
            <Button_confirmar_vagas/>
            <Vaga_v1/>
            <Vaga_v2/>
            <Vaga_v3/>
            <Vaga_v4/>
            <Vaga_v5/>
            <Vaga_v6/>
            
           
            <Vaga_v9/>
            <Vaga_v10/>
            <Vaga_v11/>
            <Vaga_v12/>
            <Vaga_v13/>
            <Vaga_v14/>
            
            <Linha_meio_vaga/>   
                 
        </View>
    )
}



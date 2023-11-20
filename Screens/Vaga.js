import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Vaga from '../src/components/vaga_prime';

import ButtonConfirmarVagas from '../src/components/button_confirmar_vagas';
import TextVagas from '../src/components/Text_vagas';
import CaixaVagas from '../src/components/Caixa_vagas';
import Linha_meio_vaga from '../src/components/linha_meio_vaga';

export default function VagaScreen() {
  const [vagaAtivada, setVagaAtivada] = useState(null);
  const [vagaEscolhida, setVagaEscolhida] = useState(null); 
  const [confirmarAtivado, setConfirmarAtivado] = useState(false);
  const navigation = useNavigation();
  const handleVagaClick = (vagaNumero) => {
    setVagaAtivada((prevVaga) => (prevVaga === vagaNumero ? null : vagaNumero));
    setConfirmarAtivado(true);
  };

  const handleConfirmarClick = () => {
    if (vagaAtivada !== null) {
      setVagaEscolhida(vagaAtivada); 
      navigation.navigate('Entrada', { vaga: vagaAtivada });
    }
  };

  const renderVagas = () => {
    const vagasDataEsquerda = [
      { numero: 1, label: 'V1' },
      { numero: 2, label: 'V2' },
      { numero: 3, label: 'V3' },
      { numero: 4, label: 'V4' },
      { numero: 5, label: 'V5' },
      { numero: 6, label: 'V6', customStyle: { borderBottomWidth: 0 } },
    ];

    const vagasDataDireita = [
      { numero: 7, label: 'V7', },
      { numero: 8, label: 'V8', },
      { numero: 9, label: 'V9', },
      { numero: 10, label: 'V10', },
      { numero: 11, label: 'V11', },
      { numero: 12, label: 'V12', customStyle: {borderBottomWidth: 0}},
    ];

    const vagasEsquerda = vagasDataEsquerda.map((vaga) => (
      <Vaga
        key={vaga.numero}
        onPress={() => handleVagaClick(vaga.numero)}
        vagaAtivada={vagaAtivada === vaga.numero}
        label={vaga.label}
        customStyle={vaga.customStyle}
      />
    ));

    const vagasDireita = vagasDataDireita.map((vaga) => (
      <Vaga
        key={vaga.numero}
        onPress={() => handleVagaClick(vaga.numero)}
        vagaAtivada={vagaAtivada === vaga.numero}
        label={vaga.label}
        customStyle={{
          ...vaga.customStyle,
          left: '70%',
          bottom: '105%',
          
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 2,
        }}
      />
    ));

    return (
      <>
        {vagasEsquerda}
        {vagasDireita}
      </>
    );
  };

  return (
    <View style={{ backgroundColor: '#171616', height: '100%' }}>
      <CaixaVagas />
      <TextVagas />
      
      <ButtonConfirmarVagas onPress={handleConfirmarClick} confirmarAtivado={confirmarAtivado} />
      
      <Linha_meio_vaga/>
      
      {renderVagas()}
      {vagaEscolhida !== null}
      
    </View>
  );
}
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Linha_meio_vaga= () => {
  return (
    <View style={styles.dashedLine}></View>
  );
};

const styles = StyleSheet.create({
  dashedLine: {

    width: 1,
    height: "60%",
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
    bottom: "108%",
    left: '50%'
  },
});

export default Linha_meio_vaga;

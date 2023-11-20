import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Vaga = ({ onPress, vagaAtivada, label , customStyle}) => {
  return (
    <TouchableOpacity
      style={[
        styles.vaga,
        { backgroundColor: vagaAtivada ? 'green' : 'transparent' }, customStyle,
      ]}
      onPress={onPress}
    >
      <Text style={styles.ButtonBuscarText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Vaga;

const styles = StyleSheet.create({
  vaga: {
    borderColor: 'white',
    bottom: '45%',
    left: '2%',
    height: '10%',
    width: '28%',
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 2,
    borderRightWidth: 0,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  ButtonBuscarText: {
    color: 'white',
    fontSize: 18,
  },
});
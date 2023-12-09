import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VagaConecta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 80,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
        
    },
})
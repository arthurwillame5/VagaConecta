import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Entrada() {
  const route = useRoute();
  const { vaga } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 50 }}>Vaga: {vaga}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '22%',
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

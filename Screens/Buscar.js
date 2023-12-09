import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Buscar() {
  // Array é armazenado no estado 'data'
  const [data, setData] = useState([]);

  async function handleFetchData() {
  // Recupera o array do AsyncStorage e converte de volta para objetos JavaScript
    const infoVeiculo = await AsyncStorage.getItem("@saveveiculo:veiculo");
    
  // Atualiza o estado 'data' com o array recuperado
    const newData = infoVeiculo ? JSON.parse(infoVeiculo) : [];
    setData(newData);
    console.log(infoVeiculo);
}

  useFocusEffect(
    useCallback(() => {
  // Chama a função para recuperar dados ao focar no componente
      handleFetchData();
  }, [])
);

  return (
    <View style={styles.container}>
      <FlatList
        data={data} // Utiliza o array 'data' para renderizar a FlatList
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{`Placa: ${item.placa}`}</Text>
            <Text>{`Cor: ${item.cor}`}</Text>
            <Text>{`Modelo/Marca: ${item.modeloMarca}`}</Text>
            <Text>{`Observações: ${item.observacoes}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "black",
    borderRadius: 8,
  },
});

import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Buscar() {
  const [data, setData] = useState([]);

  async function handleFetchData() {
    const infoVeiculo = await AsyncStorage.getItem("@saveveiculo:veiculo");
    const data = infoVeiculo ? JSON.parse(infoVeiculo) : [];
    setData(data);
    console.log(infoVeiculo);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
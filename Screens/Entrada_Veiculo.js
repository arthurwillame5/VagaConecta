import React,{useState, useEffect, useCallback}from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import Button_form from '../src/components/Button_form';
import Button_form_veiculo from '../src/components/button_form_vaiculo';
import Button_form_cliente from '../src/components/Button_form_cliente';
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Entrada() {
  const route = useRoute();
  
  const [vagaEscolhida, setVagaEscolhida] = useState(null)

  useFocusEffect(useCallback(() => {
    if (route.params?.vaga) {
      setVagaEscolhida(route.params.vaga);
    }
  }, [route.params?.vaga]));

  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [modeloMarca, setModeloMarca] = useState('' );
  const [observações, setObservações] = useState('');

   async function handleNew(){
    const id = uuid.v4();
    //objeto
    const newData = {
      id,
      placa,
      cor,
      modeloMarca,
      observações,
    }
     await AsyncStorage.setItem("@saveveiculo:veiculo", JSON.stringify(newData));
     alert('Veiculo cadastrado com sucesso!')
     console.log(newData)

     
  }


  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.Button_veiculo_conteiner}>
          <Button_form_veiculo/> 
      </View>        
          <View style={styles.Button_cliente_container}>
          <Button_form_cliente  style={styles.Button_form_cliente} /> 
      </View>
          <Text style={styles.Title}>Entrada</Text>
          <Text style={{fontSize: 20,}}>Vaga: {vagaEscolhida}</Text>
      </View>

      <View style={styles.form}>
          <TextInput 
            style={styles.Username}
            placeholder='Placa'
            onChangeText={setPlaca}
            value={placa}/>
          
          <TextInput 
            style={styles.Email}
            placeholder='Cor'
            onChangeText={setCor}
            value={cor}/>
          <TextInput 
            style={styles.Telefone}
            placeholder='Marca/Modelo'
            onChangeText={setModeloMarca}
            value={modeloMarca}/>
          <TextInput 
            style={styles.cpf}
            placeholder='Observações'
            onChangeText={setObservações}
            value={observações}/>
        </View>


        <View>
          <Button_form style={styles.button_cadastrar} onPress={handleNew}/>
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
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: '6%'
  },
  Vagas: {
    fontSize: 20,
    bottom: '10%',
    textAlign: 'center'
  },
  Username: {
    margin: 10,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  Email: {
    margin: 10,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  Telefone: {
    margin: 10,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  cpf: {
    margin: 10,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  Button_veiculo_conteiner:{
    position: 'absolute',
    top: '85%',
    left: '15%',
    backgroundColor: '#3498db',
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1
  
  },
  Button_form_veiculo: {
  }, 
  form: {
    top: '5%',
    alignItems: 'center'

  },
  button_cadastrar: {
  },
  Button_cliente_container: {
    position: 'absolute',
    top: '85%',
    left: '55%',
    backgroundColor: '#3498db',
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1,
  }
});
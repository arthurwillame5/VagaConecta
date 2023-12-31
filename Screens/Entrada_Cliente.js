import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Button_form from '../src/components/Button_form';
import Button_form_veiculo from '../src/components/button_form_vaiculo';
import Button_form_cliente from '../src/components/Button_form_cliente';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'


export default function Entrada_formulario_clientes() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('' );
  const [cpf, setCPF] = useState('');

  

  async function handleNew() {
    if (!nome || !email || !telefone || !cpf) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const id = uuid.v4();
    //objeto Cliente
    const newData = {
      id,
      nome,
      email,
      telefone,
      cpf,
    }

    await AsyncStorage.setItem("@saveveiculo:veiculo", JSON.stringify(newData));
    alert('Cliente cadastrado com sucesso!')
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
        
      </View>

      <View style={styles.form}>
        <TextInput 
          style={styles.Username}
          placeholder='Nome'
          color="white" 
          placeholderTextColor='white'
          onChangeText={setNome}
            value={nome}
            required/>
        <TextInput 
          style={styles.Email}
          placeholder='Email'
          color="white" 
          placeholderTextColor='white'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
          required/>
        <TextInput 
          style={styles.Telefone}
          placeholder='Telefone'
          color="white" 
          placeholderTextColor='white'
          keyboardType='phone-pad'
          onChangeText={setTelefone}
          value={telefone}
          required/>
        <TextInput 
          style={styles.cpf}
          placeholder='CPF'
          color="white" 
          placeholderTextColor='white'
          keyboardType='phone-pad'
          onChangeText={setCPF}
          value={cpf}
          required/>
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
    backgroundColor: '#252524'
    
  },
  header: {
    height: '22%',
    backgroundColor: '#003B88',
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
    bottom: '6%',
    color: 'white'
  },
  Vagas: {
    fontSize: 20,
    bottom: '10%',
    textAlign: 'center',

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
    backgroundColor: '#003B88',
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1
  
  },
  Button_form_veiculo: {
  }, 
  form: {
    top: '5%',
    alignItems: 'center',

  },
  button_cadastrar: {
    backgroundColor: '#white'
  },
  Button_cliente_container: {
    position: 'absolute',
    top: '85%',
    left: '55%',
    backgroundColor: '#003B88',
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  
});
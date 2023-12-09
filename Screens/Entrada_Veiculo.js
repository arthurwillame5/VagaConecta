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

  async function handleNew() {
    if (!placa || !cor || !modeloMarca ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const id = uuid.v4();
    //objeto Veiculo
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
          <Text style={{fontSize: 20, color: 'white'}}>Vaga: {vagaEscolhida}</Text>
      </View>

      <View style={styles.form}>
          <TextInput 
            style={styles.Username}
            placeholder='Placa'
            color="white" 
            placeholderTextColor='white'
            onChangeText={setPlaca}
            value={placa}
            required />
          
          <TextInput 
            style={styles.Email}
            placeholder='Cor'
            color="white" 
            placeholderTextColor='white'
            onChangeText={setCor}
            value={cor}
            required />
          <TextInput 
            style={styles.Telefone}
            placeholder='Marca/Modelo'
            color="white" 
            placeholderTextColor='white'
            onChangeText={setModeloMarca}
            value={modeloMarca}
            required />
          <TextInput 
            style={styles.cpf}
            placeholder='Observações'
            color="white" 
            placeholderTextColor='white'
            onChangeText={setObservações}
            value={observações}
            />
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
    backgroundColor: '#003B88',
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
    backgroundColor: '#003B88',
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1,
  }
});



// (State): utilizando o hook useState para criar e manipular estados locais para armazenar informações dinâmicas, como vagaEscolhida, placa, cor, modeloMarca, e observações. Isso é semelhante ao conceito de atributos ou propriedades de objetos em POO.

// Métodos e Funções: A função handleNew funciona como um método que é chamado para realizar uma ação específica (cadastrar um veículo). Ela é uma função que encapsula a lógica associada a uma ação específica, que é um conceito comum na POO.

// Objetos: criando objeto como o objeto newData para representar entidades específicas (veículos) e armazenar informações associadas a elas. Cada instância desse objeto representa um veículo com propriedades como id, placa, cor, modeloMarca, e observações.

// Tratamento de Eventos (Callback): O uso de useFocusEffect com useCallback para tratar a mudança de foco do componente é semelhante ao conceito de tratamento de eventos em POO. O callback é chamado quando ocorre um evento específico (mudança de foco).

// Encapsulamento: As variáveis de estado e funções estão encapsuladas dentro do componente. Elas são acessíveis apenas no escopo do componente.

// Roteamento: O uso de useRoute para obter informações sobre a rota é semelhante ao conceito de roteamento em algumas arquiteturas de POO, onde as informações de navegação estão encapsuladas em objetos de rota.

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  incrementarContador = () => {
    if (this.state.contador < 12) {
      this.setState({ contador: this.state.contador + 1 });
    }
  }

  decrementarContador = () => {
    if (this.state.contador > 0) {
      this.setState({ contador: this.state.contador - 1 });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contadorText}>
          Disponibilidade: {this.state.contador}/12
        </Text>
        {/* Não exibe botões na tela, mas você pode chamar as funções em resposta a eventos de botão */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003B88',
    width: 208,
    height: 40,
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
    
  },
  contadorText: {
    fontWeight: "bold",
    color: 'white'
  }
});

export default Contador;
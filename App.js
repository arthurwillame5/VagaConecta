import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home';
import Entrada from './Screens/Entrada'
import Vaga from './Screens/Vaga';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VagaConecta" component={Home} options={{title: 'VagaConecta', headerStyle: { height: 0,}}}/>
      <Stack.Screen name='Vaga' component={Vaga} options={{title: 'VagaConecta', headerStyle: { height: 0,}}}/>
      <Stack.Screen name='Entrada' component={Entrada} options={{title: 'Entrada', headerStyle: { height: 0,}}}/>
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  

})
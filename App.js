import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';


const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Home} />
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
 






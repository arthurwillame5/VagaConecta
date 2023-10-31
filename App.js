import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/index'
import Button from './src/components/Button';
import Box from './src/components/Box';
import Contador from './src/components/Contador';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {
  const signin = () => {
    alert('Cliquei');
  }

  const click = () => {
    alert('funcionando');
  }
  
  return (
    <View style={styles.container}>
      <Box/>
      <Title/>
    <View style={[styles.Contador]}>
      <Contador/>
    </View>

      <View style={[styles.button_entrada]}>
        <Button lanbelButton="Entrada" onPress={signin} />
       </View> 

       <View style={[styles.button_buscar]}> 
        <Button lanbelButton="Buscar" onPress={signin} />
      </View>

    <View style={styles.PrinterIcons}>
       <Icon name='printer' size={30} onPress={click}/>
    </View>
    <View style={styles.ReloadIcons}>
      <Icon name='reload1' size={29} onPress={click}/>

    </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button_entrada: {
    display: 'flex',
   // backgroundColor: 'black',
   // width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
   // margin: '10%',
    bottom: '55.4%',
    right: '9%',
  },
  button_buscar: {
    display: 'flex',
   //backgroundColor: 'black',
  //width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //margin: 10,
    bottom: '65%',
    left: '10%',
  },
   Contador: {
    bottom: '12%',
   },
   ButtonIcons: {

  }, 
  PrinterIcons: {
   // backgroundColor: 'black',
    bottom: '46.6%',
    left: '32%',
  },
  ReloadIcons: {
    bottom: '50%',
    left: '43%',
   // backgroundColor: 'black',
  }

});
 




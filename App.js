import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/index'
import Button from './src/components/Button';
import Box from './src/components/Box';
import Contador from './src/components/Contador';
import Icon from 'react-native-vector-icons/AntDesign';
import BoxStatus from './src/components/BoxStatus';
import TextVersion from './src/components/TextVersion';

// função
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
       <Icon name='printer' size={30} onPress={signin}/>
    </View>
    <View style={styles.ReloadIcons}>
      <Icon name='reload1' size={29} onPress={click}/>
    </View>

    <View style={styles.bars}>
      <Icon name='bars' size={30} onPress={click}/>
    </View>
    
      <BoxStatus lanbelbox='Caixa Fechado'/>

    <View style={styles.ContainerVersion}>
      <TextVersion style={{color: '#635A5A' }}/>
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
   //backgroundColor: 'black',
   // width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
   // margin: '10%',
    bottom: '47.4%',
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
    bottom: '57%',
    left: '10%',
  },
   Contador: {
    bottom: '9%',
   },
  PrinterIcons: {
   // backgroundColor: 'black',
    bottom: '44.6%',
    left: '32%',
  },
  ReloadIcons: {
    bottom: '48%',
    left: '43%',
   // backgroundColor: 'black',
  },
  bars: {
   // backgroundColor: 'black',
    bottom: '51%',
    right: '40%',
    //display: 'flex'
  },
   ContainerVersion: {
    position: 'absolute',
    bottom: '6%',
  },
});
 

// segundary



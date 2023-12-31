import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../src/components/Title/index'
import Button, { ButtonBuscar } from '../src/components/Button';
import Box from '../src/components/Box';
import Contador from '../src/components/Contador';
import Icon from 'react-native-vector-icons/AntDesign';
import BoxStatus from '../src/components/BoxStatus';
import TextVersion from '../src/components/TextVersion';
import IconBars from '../src/components/IconBars';
import Buscar from '../src/components/ButtonBuscar';

export default function Home() {
  return (
    
  <View style={styles.container}>
          <Box/>
          <Title/>
      <View style={[styles.Contador]}>
           <Contador/>
      </View>

      <View style={[styles.button_entrada]}>
            <Button lanbelButton="Entrada" />
      </View> 

       <View style={[styles.button_buscar]}> 
            <Buscar lanbelButton="Buscar"  />  
      </View>

      <View style={styles.PrinterIcons}>
           <Icon name='printer' size={30} />
      </View>
      <View style={styles.ReloadIcons}>
          <Icon name='reload1' size={29} />
      </View>

      <View style={styles.bars}>
        <IconBars/>
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
    backgroundColor: '#252524',
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
    right: '41%',
    //display: 'flex'
  },
   ContainerVersion: {
    position: 'absolute',
    bottom: '6%',
  },
});
 





  
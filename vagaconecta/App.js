import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/index'
import Button from './src/components/Button';
import Box from './src/components/Box';
import Contador from './src/components/Contador';
//import Icons from 'react-native-vector-icons/AntDesign'
//import TextVersion from './src/components/TextVersion';
//import IconsCli from './src/components/icons';

export default function App() {
  const signin = () => {
    alert('Cliquei');
  }


  return (
    <View style={styles.container}>
      <Box/>
      <Title/>
    <View style={[styles.Contador, {bottom: 145,}]}>
      <Contador/>
    </View>

    <View style={[styles.button, {bottom: 250, right: 90,}]}>
      <Button lanbelButton="Entrada" onpress={signin} />
    </View>

    <View style={[styles.button, {bottom: 290, left: 90,}]}>
      <Button lanbelButton="Buscar" onpress={signin} />
    </View>
    <View style={styles.IconsContainer}>
       {/* <IconsCli onpress={signin} style={style.icon} size={30}/>  */}
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
  IconsContainer: {
    backgroundColor: 'black'
  },

});
 




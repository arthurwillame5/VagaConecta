import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";


const Vaga_v6 = ({ onpress }) => {
    return (
        <TouchableOpacity style = {styles.vaga01} onPress={onpress}>
            <Text style={styles.ButtonBuscarText}>V1</Text>
        </TouchableOpacity>
        
    );
}



export default Vaga_v6;

const styles = StyleSheet.create({
    vaga01: {
      
        
        borderColor: 'white',
        height: '10%',
        width: '28%',
        top: '12%',
        left: '3.4%',
        borderWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 2,
        borderRightWidth: 0
    }
}); 
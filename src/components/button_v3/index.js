import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";


const Vaga_v3 = ({ onpress }) => {
    return (
        <TouchableOpacity style = {styles.vaga01} onPress={onpress}>
            <Text style={styles.ButtonBuscarText}>V1</Text>
        </TouchableOpacity>
        
    );
}



export default Vaga_v3;

const styles = StyleSheet.create({
    vaga01: {
       
        borderColor: 'white',
        height: '10%',
        width: '28%',
        top: '12%',
        left: '3.4%',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 2,
        borderRightWidth: 0
    }
}); 
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";


const Vaga_v13 = ({ onpress }) => {
    return (
        <TouchableOpacity style = {styles.vaga01} onPress={onpress}>
            <Text style={styles.ButtonBuscarText}>V1</Text>
        </TouchableOpacity>
        
    );
}



export default Vaga_v13;

const styles = StyleSheet.create({
    vaga01: {
        borderColor: 'white',
        height: '10%',
        width: '28%',
        bottom: '48%',
        left: '68%',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 2,
        borderBottomWidth: 2
    }
}); 
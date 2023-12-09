import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image} from "react-native";



const Button_form = ({onPress}) => {
    return (
        <TouchableOpacity style = {styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        
    );
}



export default Button_form;

const styles = StyleSheet .create({
    button: {
        backgroundColor: '#003B88',
        width: '40%',
        height: '23%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'black',
        top: '130%',
        left: '29%'
        
    },
    buttonText: {
        color: 'white'
    }

}); 
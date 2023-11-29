import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";


const Button_form_cliente = ({}) => {
    const navigation = useNavigation();
    const onPressButton = () => {
        navigation.navigate('Entrada_Cliente')
    }

    return (
        <TouchableOpacity style={styles.button_form_cliente} onPress={onPressButton}>
            <Text style={styles.buttonText}>Cliente</Text>
        </TouchableOpacity>
        
    );
}



export default Button_form_cliente;

const styles = StyleSheet.create({
    button_form_cliente: {
        width: 120,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        textAlign: 'center'
}
}); 
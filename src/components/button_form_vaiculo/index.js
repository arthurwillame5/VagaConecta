import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";



const Button_form_veiculo = ({}) => {
    const navigation = useNavigation();
    const onPressButton = () => {
        navigation.navigate(('Entrada'))
    }
    return (
        <TouchableOpacity style={styles.button_form_veiculo}onPress={onPressButton}>
            <Text style={styles.buttonText}>Veiculo</Text>
        </TouchableOpacity>
        
    );
}



export default Button_form_veiculo;

const styles = StyleSheet.create({
    button_form_veiculo: {
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
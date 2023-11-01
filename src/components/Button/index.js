import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'



const Button = ({ lanbelButton, onpress  }) => {
    return (
        <TouchableOpacity style = {styles.button} onPress={onpress}>
            <Text style={styles.buttonText}>{lanbelButton}</Text>
        </TouchableOpacity>
    );
}

const Buttonicon = ({click}) => {
    return (
    <TouchableOpacity onPress={click}>
        <Icon/>
    </TouchableOpacity>
    );
}




export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2BC9D3',
        width: 139,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        fontWeight: "bold"
    },
}); 
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";


const ButtonCaixa = ({}) => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style={styles.buttonText}>Informações do Pátio</Text>
            <Icon style={styles.icon} name="profile" size={45}/>
        </TouchableOpacity>
        
    );
}



export default ButtonCaixa;

const styles = StyleSheet.create({
    button: {
      //  backgroundColor: '#2BC9D3',
        width: '100%',
        height: '7%',
        top: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 16,
        //borderWidth: 2,
        borderColor: 'black',
        marginTop: -18,        
    },
    buttonText: {
        fontWeight: "bold",
        top: '35%',
        right: '2%',
        fontSize: 15,
        color: 'white'
    },
    icon: {
        bottom: '17%',
        right: '35%',
    }
}); 
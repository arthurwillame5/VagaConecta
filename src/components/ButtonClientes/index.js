import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image} from "react-native";



const ButtonClientes = ({}) => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style={styles.buttonText}>Clientes</Text>
            <Image style={styles.caixa}  source={require('/Users/Miquéias/Desktop/VagaConecta/vagaconecta/src/components/imgs/people.png')}/>
        </TouchableOpacity>
        
    );
}



export default ButtonClientes;

const styles = StyleSheet.create({
    button: {
       // backgroundColor: '#2BC9D3',
        width: '100%',
        height: '7%',
        top: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 16,
        //borderWidth: 2,
        borderColor: 'black',
        marginTop: -33,
        
    },
    buttonText: {
        fontWeight: "bold",
        top: '38%',
        right: '13%',
        fontSize: 15,
    },
    caixa: {
        bottom: '20%',
        right: '35%',
        height: '90%',
        width:'15%', 
    }
}); 
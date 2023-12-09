import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image} from "react-native";



const ButtonSair = ({}) => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style={styles.buttonText}>Sair</Text>
            <Image style={styles.caixa}  source={require('/Users/Miquéias/Desktop/VagaConecta/vagaconecta/src/components/imgs/exit.png')}/>
        </TouchableOpacity>
        
    );
}



export default ButtonSair;

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
        marginTop: 10,
        
    },
    buttonText: {
        fontWeight: "bold",
        top: '28%',
        right: '20%',
        fontSize: 15,
        color: 'white'
    },
    caixa: {
        bottom: '20%',
        right: '34%',
        height: '64%',
        width:'12%', 
    }
}); 
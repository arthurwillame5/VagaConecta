import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";


const ButtonPatio = ({}) => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style={styles.buttonText}>Operar Caixa</Text>
            <Image style={styles.caixa}  source={require('/Users/Miquéias/Desktop/VagaConecta/vagaconecta/src/components/imgs/caixadedinheiro.png')}/>
        </TouchableOpacity>
        
    );
}



export default ButtonPatio;

const styles = StyleSheet.create({
    button: {
      //  backgroundColor: '#2BC9D3',
        width: '100%',
        height: '7%',
        top: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 16,
        //borderWidth: 2,
        borderColor: 'black',
        marginTop: -18,
        
    },
    buttonText: {
        fontWeight: "bold",
        top: '47%',
        right: '10%',
        fontSize: 15,
    },
    caixa: {
        bottom: '20%',
        right: '35%',
        height: '90%',
        width:'15%', 
    }
}); 
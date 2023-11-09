import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";


const Buscar = ({ lanbelButton, onpress  }) => {
    return (
        <TouchableOpacity style = {styles.ButtonBuscar} onPress={onpress}>
            <Text style={styles.ButtonBuscarText}>{lanbelButton}</Text>
            <Icon style={styles.iconBuscar} name="search1" size={20}/>
        </TouchableOpacity>
        
    );
}



export default Buscar;

const styles = StyleSheet.create({
    ButtonBuscar: {
        backgroundColor: '#2BC9D3',
        width: 139,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'black',
        
    },
    ButtonBuscarText: {
        fontWeight: "bold",
        top: '23%',
        left: '3%',
    },
    iconBuscar: {
        right: '28%',
        bottom: '27%',
    }
}); 
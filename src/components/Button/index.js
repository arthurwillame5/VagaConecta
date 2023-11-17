import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";



const Button = ({ lanbelButton}) => {
    const navigation = useNavigation();

    const onPressButton = () => {
        navigation.navigate('Vaga')
    }
    return (
        <TouchableOpacity style = {styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{lanbelButton}</Text>
            <Icon style={styles.icon} name="car" size={20}/>
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
        fontWeight: "bold",
        top: '23%',
        left: '5%'
    },
    icon: {
        bottom: '31%',
        right: '28%',
    }
}); 
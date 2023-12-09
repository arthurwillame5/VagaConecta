import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Buscar = ({ lanbelButton}) => {
    const navigation = useNavigation();

    const onPressButton = () => {
        navigation.navigate('Buscar')
    }

    return (
        <TouchableOpacity style = {styles.ButtonBuscar} onPress={onPressButton}>
            <Text style={styles.ButtonBuscarText}>{lanbelButton}</Text>
            <Icon style={styles.iconBuscar} name="search1" size={20}/>
        </TouchableOpacity>
        
    );
}



export default Buscar;

const styles = StyleSheet.create({
    ButtonBuscar: {
        backgroundColor: '#003B88',
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
        color: 'white'
    },
    iconBuscar: {
        right: '28%',
        bottom: '27%',
    }
}); 
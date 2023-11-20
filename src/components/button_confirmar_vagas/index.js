import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";



const Button_confirmar_vagas = ({ onPress, confirmarAtivado }) => {
    return (
        <TouchableOpacity style={[
            styles.ButtonBuscar,
            { backgroundColor: confirmarAtivado ? '#3067D1' : 'gray' },
          ]}
          onPress={onPress}
          disabled={!confirmarAtivado}
        >
            <Text style={{color: 'white', fontWeight: 'bold'}}>Confirmar</Text>
        </TouchableOpacity>
    );
}

export default Button_confirmar_vagas;

const styles = StyleSheet.create({
    ButtonBuscar: {
        backgroundColor: '#3067D1',
        width: '40%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'black',
        top: '85%',
        left: '29%'
        
    }

}); 
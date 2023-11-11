import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import ButtonPatio from "../ButtonPatio";
import ButtonCaixa from "../ButtonCaixa";
import ButtonClientes from "../ButtonClientes";
import ButtonSair from "../ButtonSair";
import TitleModal from "../TittleModal";
import TextVersion from '../TextVersion';

    export function ActionModal({ HandleClose}) {
    return (
        <SafeAreaView style={style.container}> 
            <TouchableOpacity style={{flex: 1, zIndex: 9,}} onPress={HandleClose}></TouchableOpacity>
                <View style={style.ActionButton}>
                    <ButtonPatio/>
                    <ButtonCaixa/>
                    <ButtonClientes/>
                    <ButtonSair/>    
                    <TextVersion style={style.TextVersion}/>          
                    <View style={{backgroundColor: '#2BC9D3', position: 'absolute',  height: '19%', width: '100%'}}>
                        <TitleModal/>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'

        
    },
    ActionButton: {
       // zIndex: 99,
       backgroundColor: 'white',
        height: '100%',
        width: '75%',

    },PatiobuttonText: {
        //backgroundColor: 'black',
        width: '50%',
        height:'20%',
        fontSize: 13,
        left: '15%',
        top: '100%',
        backgroundColor: '#2BC9D3',
        justifyContent: 'center',
        alignItems: 'center',        
        borderWidth: 2,
        borderColor: 'black',
    },patioicon: {
        //width: '20%',
        height: '30%',
        top: '20%'
    }, TextVersion: {
        top: '3180%',
        left: '25%',
        
    }

    
    

})


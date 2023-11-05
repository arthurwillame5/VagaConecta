import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet} from "react-native";

    export function ActionModal({ HandleClose }) {
    return (
        <SafeAreaView style={style.container}> 
            <TouchableOpacity style={{flex: 1, zIndex: 9,}} onPress={HandleClose}></TouchableOpacity>

            <View style={style.content}>
                {/* botao do modal */}
                <View style={style.ActionButton}>
                    <TouchableOpacity style={style.ActionText} onPress={ () => {}}>
                        <Text>Caixa</Text>
                        <Text>Patio</Text>
                        <Text>Caixadepagamento</Text>
                    </TouchableOpacity>
    
                <View style={{backgroundColor: '#2BC9D3', position: 'absolute', top: 0, height: '19%', width: '100%'}}>
                    <Text style={{textAlign: 'center', top: '22%', fontSize: 20, fontWeight: 'bold',}}>VagaConecta</Text>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, top: '25%',}}>Estacionamento</Text>
                </View>


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
    content: {
        marginHorizontal: 20,
        marginLeft: 0,
        marginRight: 12,
        
    },
    ActionButton: {
       // zIndex: 99,
        backgroundColor: 'white',
        height: '100%',
        width: '75%',

    },

})

// feature
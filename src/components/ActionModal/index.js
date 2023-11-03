import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet} from "react-native";

export function ActionModal( handleClose) {
    return (
        <SafeAreaView style={StyleSheet.container}> 
            <TouchableOpacity style={{flex: 1, zIndex: 9, }} onPress={handleClose}></TouchableOpacity>

            <View style={StyleSheet.content}>
                <View style={style.ActionButton} onPress={ () => {}}>
                    <TouchableOpacity style={style.ActionText}>
                        <Text>Caixa</Text>
                    </TouchableOpacity>
                </View>
                 
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        
    },
    content: {
        marginHorizontal: 20,
        marginLeft: 10,
        marginRight: 10,
        
    },
    ActionButton: {
       // zIndex: 99,
        backgroundColor: 'white',
        height: '100%',
        width: '75%',

    }
})
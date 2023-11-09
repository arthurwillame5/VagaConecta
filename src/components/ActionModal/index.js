import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
    export function ActionModal({ HandleClose }) {
    return (
        <SafeAreaView style={style.container}> 
            <TouchableOpacity style={{flex: 1, zIndex: 9,}} onPress={HandleClose}></TouchableOpacity>

            <View style={style.content}>
                
                <View style={style.ActionButton}>

                    <View>
                    <TouchableOpacity style={style.profileText} onPress={ () => {}}>
                        <Text style={{fontSize: 13, textAlign: 'center', top: '1080%', fontWeight: 'bold', right: '6%', }}>Informações do pátio</Text>
                        <Icon name='profile' size={40} style={{position: 'absolute', top: '1020%', right: '80%', }}/>
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={style.caixaText} onPress={ () => {}}>
                        <Text style={{fontSize: 13, textAlign: 'center', top: '180%', fontWeight: 'bold', right: '14   %',}}>Operar Caixa</Text>
                        <Image source={require('/Users/Miquéias/Desktop/VagaConecta/vagaconecta/src/components/imgs/caixadedinheiro.png')}
                        style={{ height: '35%', width: '14%', top: '155%', left: '6%'}}
                        />
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={style.peopleText} onPress={ () => {}} >
                        <Text style={{fontSize: 13, textAlign: 'center', bottom: '26%', fontWeight: 'bold', right: '18%' }}>Clientes</Text>
                        <Image source={require('/Users/Miquéias/Desktop/VagaConecta/vagaconecta/src/components/imgs/people.png')}
                        style={{height: '35%', width: '14%', bottom: '49%', left: '6%' }}
                        />
                    </TouchableOpacity>
                    </View>

                    <View style={style.exit}>
                    <TouchableOpacity style={style.exitText} onPress={ () => {}}>
                        <Text style={{fontSize: 13, textAlign: 'center', bottom: '297%', fontWeight: 'bold', right: '8%',}}>Informações do pátio</Text>
                        <Image source={require('/Users/Miquéias/Desktop/VagaConecta/vagaconecta/src/components/imgs/exit.png')}
                        style={{height: '30%', width: '10%',bottom: '319%', left: '7%' }}
                        />
                    </TouchableOpacity>
                    </View>

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
        marginHorizontal: '20%',
        marginLeft: '0%',
        marginRight: '3%',
    },
    ActionButton: {
       // zIndex: 99,
        backgroundColor: 'white',
        height: '100%',
        width: '75%',

    },
    
    

})


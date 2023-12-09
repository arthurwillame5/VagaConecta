import React from "react";
import { View, Text,} from "react-native";

export default function Text_vagas({style}) {
    return(
        <View>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', top: '250%', color: 'white'}}>Escolha a vaga</Text>
        </View>
    );
}
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BoxStatus({ lanbelbox }) {
    return (
        <View style={styles.BoxStatus}>
            <Text style={styles.TextBoxStatus}>{lanbelbox}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    BoxStatus: {
        width: '65%',
        borderBottomWidth: 1,
        bottom: '17%',
        borderColor: 'white'
        
    },
    TextBoxStatus: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    },
});
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IconsCli from 'react-native-vector-icons/AntDesign'

const InconsCli = ({  onpress  }) => {
    return (
        <TouchableOpacity style = {styles.InconsCli} onPress={onpress}>
            <Text name='reload1' style={styles.InconsCliText}></Text>
        </TouchableOpacity>
    );
}

export default InconsCli

const styles = StyleSheet.create({
    icons: {
       backgroundColor: 'black'
    },
}); 
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, Animated} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'; 
import { useState } from "react";
import { ActionModal } from "../ActionModal"; 



export default function IconBars() {
const [visibleModal, setVisibleModal] = useState(false)

  return (

    <View>
        <TouchableOpacity style={styles.IconBars} onPress={() => setVisibleModal(true)}>
             <Icon name='bars' size={30} /> 
        </TouchableOpacity>

        <Modal
         visible={visibleModal}
         transparent={true}
         onRequestClose={() => setVisibleModal(false)}
        >
         <ActionModal 
          HandleClose={ () => setVisibleModal(false)}
         />
        </Modal>

    </View>
  );
}



const styles = StyleSheet.create({
    IconBars: {

    }
})
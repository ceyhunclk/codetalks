import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from './Buttons.style';
const Buttons=({text,onPress,style="first"})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles[style].container}> 
            <Text style={styles[style].text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default Buttons;
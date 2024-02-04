import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from './FloatingButton.style';
import Icon from "react-native-vector-icons/MaterialIcons";
const FloatingButton=({icon,onPress})=>{
    return(
        <TouchableOpacity  style={styles.container} onPress={onPress}>
            <Icon style={styles.icon} name={icon} size={32}/>
        </TouchableOpacity>
    )
}
export default FloatingButton;
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from './RoomComponent.style';
const RoomComponent=({data,onClick})=>{
    return(
        <TouchableOpacity  style={styles.container} onPress={()=>onClick(data.uid)}>
            <Text style={styles.text}>{data.roomName}</Text>
        </TouchableOpacity>
    )
}
export default RoomComponent;
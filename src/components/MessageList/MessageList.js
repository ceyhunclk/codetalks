import React from "react";
import { SafeAreaView, Text,TouchableOpacity,View } from "react-native";
import styles from './MessageList.style';
import { formatDistance, subDays } from "date-fns";
import { tr } from "date-fns/locale";
const MessageList=({data,onPress})=>{


    return(
        <TouchableOpacity  style={styles.container} onLongPress={()=>onPress(data.uid)}>
            <View style={styles.header}>
       
            <Text style={styles.headText}>{data.senderName[0]}</Text>
            <Text style={styles.dateT}>{formatDistance(data.date, new Date(), { addSuffix: true, locale:tr })}</Text>
            </View>
            <Text>{data.message}</Text>
         
        </TouchableOpacity>
    )
}
export default MessageList;
import { StyleSheet } from "react-native";
import color from "../../utils/color";
const baseStyle={
container :{
     padding:15,
        margin:15,
        borderRadius:10
},
text:{

    fontSize:22,
    fontWeight:"bold",
    textAlign:"center"
}


}


export default {
first:StyleSheet.create({
    container:{

        ...baseStyle.container,
        backgroundColor:color.baseButtonColor,
       
    },
    text:{
        ...baseStyle.text,
        color:color.baseTextColor,
     
    }
    }),
    second:StyleSheet.create({
        container:{
            ...baseStyle.container,
            backgroundColor:color.baseTextColor,
    
        },
        text:{
            color:color.baseButtonColor,
            ...baseStyle.text,
        }
        })




}
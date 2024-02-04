import { StyleSheet } from "react-native";
import color from "../../utils/color";
export default StyleSheet.create({
container:{
    backgroundColor:color.baseButtonColor,
    position:"absolute",
    right:20,
    bottom:20,
    padding:10,
    borderRadius:30,
    shadowColor:"#00000066",
    elevation:5
},
icon:{
    color:color.baseTextColor
}
})
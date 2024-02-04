import { StyleSheet } from "react-native";
import color from "../../utils/color";
export default StyleSheet.create({
container:{
    flex:1,
    backgroundColor:color.basebackgroundColor
},
headerText:{
    paddingLeft:20,
    color:color.baseTextColor,
    fontSize:150,
    fontWeight:"bold"
},
headerText2:{
    paddingLeft:20,
    color:color.baseButtonColor,
    fontSize:110,
    fontWeight:"bold"
}
})
import { StyleSheet,Dimensions } from "react-native";
import color from "../../utils/color";
const deviceSize=Dimensions.get('window');
export default StyleSheet.create({
container:{
justifyContent:"flex-end",
padding:0,
margin:0,


},
modalbase:{
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20,
    position:"relative",
    height:deviceSize.height/3,
    backgroundColor:color.basebackgroundColor,
}
})
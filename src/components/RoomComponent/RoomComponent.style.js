import { StyleSheet,Dimensions } from "react-native";
import color from "../../utils/color";
const deviceSize=Dimensions.get('window');
export default StyleSheet.create({
container:{
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:20,
    height:deviceSize.height/4,
    width:deviceSize.width/2-20,
    padding:15,
    justifyContent:"center",
    alignItems:"center"
},
text:{
    color:color.baseButtonColor,
    fontSize:28,
    fontWeight:"bold"
}
})
import { StyleSheet } from "react-native";
import color from "../../utils/color";
export default StyleSheet.create({
container:{
    padding:10,
    margin:10,
    backgroundColor:color.baseTextColor,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
},
header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:15
},
headText:{
    fontSize:22,

},
dateT:{
    fontStyle:"italic"
}
})
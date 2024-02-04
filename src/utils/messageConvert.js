import React from "react";
import { SafeAreaView, Text } from "react-native";
const messageConvert=(code)=>{
switch (code) {
    case "auth/invalid-email":
        return "E-Mail Adresi Doğru Formatta Değil"
        break;
    case "auth/invalid-credential":
        return "E Mail adresi veya Şifreniz Yanlış"
        break;
    case "auth/weak-password":
        return "Şifre Güçlü Değil (En az 6 Karakter)"
        break;



    default:
return code;

        break;
}


    return
}
export default messageConvert;
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './SignIn.style';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import messageConvert from '../../utils/messageConvert';

const SignIn = ({navigation}) => {
  const İnitVal = {
    userName: '',
    password: '',
  };
  const onSubmit = async response => {
    try {
      await auth().signInWithEmailAndPassword(
        response.userName,
        response.password,
      );

      showMessage({
        message:"Giriş Başarılı....",
        type:"success"

      })


    } catch (error) {
      console.log(error);
      showMessage({
        message: messageConvert(error.code),
        type: 'danger',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
   <Text style={styles.headerText}>
        Code
      </Text>
        
      <Text style={styles.headerText2}>Talks</Text>
      <View>
        <Formik initialValues={İnitVal} onSubmit={onSubmit}>
          {({handleSubmit, values, handleChange}) => (
            <>
              <Input
                value={values.userName}
                placeholder="E Posta Adresiniz"
                changeText={handleChange('userName')}
              />
              <Input
                placeholder="Şifreniz"
                changeText={handleChange('password')}
              />
              <Buttons
                text="Giriş Yap"
                onPress={handleSubmit}
                style="first"></Buttons>
            </>
          )}
        </Formik>

        <Buttons text="Kayıt Ol" style="second" onPress={()=>navigation.navigate("SignUp")}></Buttons>
      </View>


      </ScrollView>
   
    </SafeAreaView>
  );
};
export default SignIn;

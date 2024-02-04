import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './SignUp.style';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import messageConvert from '../../utils/messageConvert';
import formChecker from '../../utils/formChecker';

const SignUp = ({navigation}) => {
  const İnitVal = {
    userName: '',
    password: '',
    repassword: '',
  };
  const onSubmit = async response => {
    if (formChecker(response)) {
      showMessage({
        message: 'Alanlar Boş Olamaz',
        type: 'danger',
      });
      return;
    }

    if (response.password != response.repassword) {
      showMessage({
        message: 'Şifreler Aynı Değil',
        type: 'danger',
      });
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(
        response.userName,
        response.password,
      );

      showMessage({
        message: 'Kayıt Başarılı',
        type: 'success',
      });
  
    } catch (error) {
      showMessage({
        message: messageConvert(error.code),
        type: 'danger',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Code</Text>

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
                <Input
                  placeholder="Şifre Tekrar"
                  changeText={handleChange('repassword')}
                />
                <Buttons
                  text="Kayıt Ol"
                  onPress={handleSubmit}
                  style="first"></Buttons>
              </>
            )}
          </Formik>

          <Buttons text="Geri Dön" style="second" onPress={()=>navigation.goBack()}></Buttons>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;

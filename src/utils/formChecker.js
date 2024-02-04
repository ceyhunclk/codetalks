import React from 'react';
import {SafeAreaView, Text} from 'react-native';
const formChecker = response => {
  const key = Object.keys(response);
  let durum = false;

  for (ele of key) {
    if (response[ele] =="") {
durum=true
    }
  }
return durum;

};
export default formChecker;

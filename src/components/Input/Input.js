import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import styles from './Input.style';
import color from '../../utils/color';
const Input = ({changeText, placeholder,value, onChange}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      value={value}
        style={styles.textInput}
        placeholderTextColor={color.baseTextColor}
        placeholder={placeholder}
        onChangeText={changeText}
        onChange={onChange}
        />
    </SafeAreaView>
  );
};
export default Input;

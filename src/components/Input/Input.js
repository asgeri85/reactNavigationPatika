import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.style';

const Input = ({label, placeHolder, type, changeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder={placeHolder}
          keyboardType={type}
          onChangeText={changeText}
        />
      </View>
    </View>
  );
};

export default Input;

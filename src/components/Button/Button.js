import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

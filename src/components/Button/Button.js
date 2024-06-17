import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

const Button = ({text, onPress, style, theme}) => {
  return (
    <TouchableOpacity style={[styles[theme].button, style]} onPress={onPress}>
      <Text style={styles[theme].text}>{text}</Text>
      <Text style={styles[theme].icon}>{'>'}</Text>
    </TouchableOpacity>
  );
};

export default Button;

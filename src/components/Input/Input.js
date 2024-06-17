import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Input.style';

const Input = ({
  placeholder,
  name,
  style,
  onPress,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="gray"
      />
      <Icon name={name} size={20} color="gray" onPress={onPress} />
    </View>
  );
};

export default Input;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

export default function Button({label, theme = 'primary', ...otherProps}) {
  return (
    <TouchableOpacity style={styles[theme].container} {...otherProps}>
      <Text style={styles[theme].label}>{label}</Text>
    </TouchableOpacity>
  );
}

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ButtonStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color = '#6a1b9a', style = {} }) => {
  return (
    <TouchableOpacity style={[styles.button, style, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

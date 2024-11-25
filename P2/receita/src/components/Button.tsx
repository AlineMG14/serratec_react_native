import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Button;

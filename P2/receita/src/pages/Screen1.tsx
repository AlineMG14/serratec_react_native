import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NameContext } from '../context/NameContext';
import Button from '../components/Button';
import styles from '../styles/Screen1Styles';

const Screen1 = ({ navigation }: any) => {
  const { setName } = useContext(NameContext);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    const loadName = async () => {
      const savedName = await AsyncStorage.getItem('name');
      if (savedName) setInputName(savedName);
    };
    loadName();
  }, []);

  const handleSave = async () => {
    await AsyncStorage.setItem('name', inputName);
    setName(inputName);
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      
      <Text style={styles.title}>Escreva seu nome</Text>
      
      <TextInput
        style={styles.input}
        value={inputName}
        onChangeText={setInputName}
        placeholder="Seu nome"
        placeholderTextColor="#ccc"
      />
      
      <Button title="Salve e receba uma receita" onPress={handleSave} />
    </View>
  );
};

export default Screen1;

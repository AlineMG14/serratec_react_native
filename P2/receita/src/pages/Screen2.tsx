import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NameContext } from '../context/NameContext';
import { getRandomFoodImage } from '../services/ApiService';
import styles from '../styles/Screen2Styles';

const Screen2 = () => {
  const { name } = useContext(NameContext);
  const [recipeImage, setRecipeImage] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRandomFoodImage();
        setRecipeImage(data.image);
      } catch (error) {
        console.error('Erro ao buscar imagem:', error);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}, hoje você vai comer:</Text>
      {recipeImage ? <Image source={{ uri: recipeImage }} style={styles.image} /> : <Text>Carregando...</Text>}
    </View>
  );
};

export default Screen2;

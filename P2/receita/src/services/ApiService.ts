import axios from 'axios';

const api = axios.create({
  baseURL: 'https://foodish-api.com/api/',
  timeout: 10000,
});

export const getRandomFoodImage = async () => {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar imagem de comida:', error);
    throw error;
  }
};

export default api;

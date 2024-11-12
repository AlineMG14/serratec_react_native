import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { styles } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";

interface Card {
  id: string;
  title: string;
  number: string;
  image: any;
}

const cards: Card[] = [
  {
    id: "1",
    title: "Expresso",
    number: "01.09.05905776-1",
    image: require("../../assets/imagens/cartao_rosa.png"),
  },
  {
    id: "2",
    title: "Trabalho",
    number: "02.19.15905888-2",
    image: require("../../assets/imagens/cartao_azul.png"),
  },
  {
    id: "3",
    title: "Estudante",
    number: "03.29.25905999-3",
    image: require("../../assets/imagens/cartao_verde.png"),
  },
];

const { width } = Dimensions.get("window");
const cardWidth = 220;
const offsetCenter = (width - cardWidth) / 2;

const CardScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSnapToItem = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Meus cartões</Text>

      <FlatList
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: offsetCenter,
        }}
        snapToAlignment="center"
        snapToInterval={cardWidth} // Define o intervalo para o "snap"
        decelerationRate="fast"
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / cardWidth
          );
          handleSnapToItem(index);
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width: cardWidth }}>
            <CardItem
              title={item.title}
              number={item.number}
              image={item.image}
            />
          </View>
        )}
      />

      <View style={styles.indicatorContainer}>
        {cards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Adicionar cartão</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

export default CardScreen;

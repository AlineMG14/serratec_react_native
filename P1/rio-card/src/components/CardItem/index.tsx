import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface CardItemProps {
  title: string;
  number: string;
  image: any;
}

const CardItem: React.FC<CardItemProps> = ({ title, number, image }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardNumber}>{number}</Text>
    </TouchableOpacity>
  );
};

export default CardItem;

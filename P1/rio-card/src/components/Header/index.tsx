import React from "react";
import { View, Image } from "react-native";
import { styles } from "../Header/stlyle";
import logo from "../../assets/imagens/logo.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Header;

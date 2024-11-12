import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
} from "react-native";
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import { styles } from "./style";

import iconeInicio from "../../assets/imagens/footer_inicio.png";
import iconeCartoes from "../../assets/imagens/footer_meus_cartoes.png";
import iconeRecarga from "../../assets/imagens/footer_recarga.png";
import iconeCartaoDigital from "../../assets/imagens/footer_cartao_digital.png";
import iconeServicos from "../../assets/imagens/footer_servicos.png";

type RootTabParamList = {
  Início: undefined;
  Cartões: undefined;
  Recarga: undefined;
  "Cartão digital": undefined;
  Serviços: undefined;
};

const Footer = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();
  const route = useRoute();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const getIconTintColor = (screenName: keyof RootTabParamList) => {
    return route.name === screenName ? "#0074e5" : "#A9A9A9";
  };

  const navigateToScreen = (screenName: keyof RootTabParamList) => {
    if (navigation.getState().routeNames.includes(screenName)) {
      navigation.navigate(screenName);
    } else {
      Alert.alert(
        "Tela não disponível",
        `A tela ${screenName} ainda não foi implementada.`
      );
    }
  };

  if (isKeyboardVisible) return null; // Oculta o footer quando o teclado está visível

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigateToScreen("Início")}
      >
        <Image
          source={iconeInicio}
          style={[styles.footerIcon, { tintColor: getIconTintColor("Início") }]}
        />
        <Text
          style={[styles.footerText, { color: getIconTintColor("Início") }]}
        >
          Início
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigateToScreen("Cartões")}
      >
        <Image
          source={iconeCartoes}
          style={[
            styles.footerIcon,
            { tintColor: getIconTintColor("Cartões") },
          ]}
        />
        <Text
          style={[styles.footerText, { color: getIconTintColor("Cartões") }]}
        >
          Meus cartões
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigateToScreen("Recarga")}
      >
        <Image
          source={iconeRecarga}
          style={[
            styles.footerIcon,
            { tintColor: getIconTintColor("Recarga") },
          ]}
        />
        <Text
          style={[styles.footerText, { color: getIconTintColor("Recarga") }]}
        >
          Recarga
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigateToScreen("Cartão digital")}
      >
        <Image
          source={iconeCartaoDigital}
          style={[
            styles.footerIcon,
            { tintColor: getIconTintColor("Cartão digital") },
          ]}
        />
        <Text
          style={[
            styles.footerText,
            { color: getIconTintColor("Cartão digital") },
          ]}
        >
          Cartão digital
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigateToScreen("Serviços")}
      >
        <Image
          source={iconeServicos}
          style={[
            styles.footerIcon,
            { tintColor: getIconTintColor("Serviços") },
          ]}
        />
        <Text
          style={[styles.footerText, { color: getIconTintColor("Serviços") }]}
        >
          Serviços
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

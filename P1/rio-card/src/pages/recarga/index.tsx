import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const valoresRecarga = ["R$ 80,00", "R$ 100,00", "R$ 150,00"];

const RecargaScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [otherValue, setOtherValue] = useState("");

  // Função para formatar o valor como moeda
  const handleValueChange = (value: string) => {
    // Remove todos os caracteres que não sejam números
    const numericValue = value.replace(/\D/g, "");

    // Formata o valor como moeda
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(numericValue) / 100);

    setOtherValue(formattedValue); // Atualiza o valor formatado
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Item 1 - Escolha um valor para recarga</Text>

      <View style={styles.cardInfoContainer}>
        <Image
          source={require("../../assets/imagens/cartao_rosa.png")}
          style={styles.cardImage}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Expresso</Text>
          <Text style={styles.cardNumber}>01.09.05905776-1</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/imagens/icone_excluir.png")}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.valueButtonsContainer}>
        {valoresRecarga.map((valor, index) => (
          <TouchableOpacity key={index} style={styles.valueButton}>
            <Text style={styles.valueButtonText}>{valor}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.otherValueText}>Outro valor:</Text>
      <TextInput
        style={styles.otherValueInput}
        placeholder=""
        keyboardType="numeric"
        value={otherValue}
        onChangeText={handleValueChange}
      />

      <TouchableOpacity style={styles.continueButton} disabled>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

export default RecargaScreen;

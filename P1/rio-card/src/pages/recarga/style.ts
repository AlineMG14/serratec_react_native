import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f6",
    alignItems: "center",
    paddingBottom: 75,
  },
  title: {
    fontSize: 22,
    color: "#0074e5",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  cardInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 45, // Adiciona espaço para o cartão "flutuar" à esquerda
    marginHorizontal: 16,
    elevation: 10,
    marginBottom: 50,
    width: "90%",
  },
  cardImage: {
    position: "absolute", // Faz o cartão rosa flutuar
    left: -20, // Ajusta a posição para fora do contêiner
    width: 90,
    height: 90,
    borderRadius: 8,
    resizeMode: "contain",
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 40,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardNumber: {
    fontSize: 16,
    color: "#555",
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: "#555",
  },
  valueButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginBottom: 40,
  },
  valueButton: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  valueButtonText: {
    fontSize: 16,
    color: "#555",
  },
  otherValueText: {
    alignSelf: "flex-start",
    marginLeft: 16,
    fontSize: 16,
    color: "#555",
    marginBottom: 0,
  },
  otherValueInput: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    paddingVertical: 5,
    marginBottom: 140,
    marginTop: 0,
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#B5B5B5",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
  },
  continueButtonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});

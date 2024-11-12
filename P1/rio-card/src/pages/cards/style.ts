import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f6",
    alignItems: "center",
    paddingBottom: 75,
  },
  title: {
    fontSize: 25,
    color: "#0074e5",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 45,
  },
  carouselContainer: {
    paddingHorizontal: (width - 200) / 2,
  },
  addButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#0074e5",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 15,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#0074e5",
  },
});

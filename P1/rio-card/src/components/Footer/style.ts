import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#faf8f6",
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcon: {
    width: 25,
    height: 25,
    tintColor: "#0074e5",
  },
  footerText: {
    fontSize: 12,
    color: "#0074e5",
    marginTop: 4,
  },
});

import React from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return <TabNavigator />;
}

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CardScreen from "../pages/cards";
import RecargaScreen from "../pages/recarga";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Oculta o título do header na parte superior
          tabBarStyle: { display: "none" }, // Oculta a barra do TabNavigator
        }}
      >
        <Tab.Screen name="Cartões" component={CardScreen} />
        <Tab.Screen name="Recarga" component={RecargaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './src/pages/Screen1';
import Screen2 from './src/pages/Screen2';
import { NameProvider } from './src/context/NameContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NameProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NameProvider>
  );
}

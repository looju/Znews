import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsNavigator } from "./src/Navigation/NewsNavigator/NewsNavigator";
import { Carousel } from "./src/Features/Carousel/Screen/Carousel";
import { Setup } from "./src/Features/Setup/Screen/Setup";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Carousel"
          component={Carousel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setup"
          component={Setup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewsNavigator" component={NewsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

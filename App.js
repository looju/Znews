import "react-native-gesture-handler";
import * as React from "react";
import { Context } from "./src/Services/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsNavigator } from "./src/Navigation/NewsNavigator/NewsNavigator";
import { Carousel } from "./src/Features/Carousel/Screen/Carousel";
import { Setup } from "./src/Features/Setup/Screen/Setup";
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Arizonia_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular,
} from "@expo-google-fonts/dev";

const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Arizonia_400Regular,
    Griffy_400Regular,
    Tangerine_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Context>
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
            <Stack.Screen
              name="NewsNavigator"
              component={NewsNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Context>
    );
  }
}

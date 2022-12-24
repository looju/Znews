import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SettingsNavigator } from "../SettingsNavigator'/SettingsNavigator";
import { Health } from "../../Features/News/Screen/Health";
import { Sport } from "../../Features/News/Screen/Sport";
import { Business } from "../../Features/News/Screen/Business";
import { Tech } from "../../Features/News/Screen/Tech";
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Arizonia_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular,
} from "@expo-google-fonts/dev";

const Tab = createMaterialBottomTabNavigator();

export const NewsNavigator = () => {
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "World") {
              iconName = "earth";
              size = focused ? 30 : 25;
            } else if (route.name === "Business") {
              iconName = "handshake-outline";
              size = focused ? 30 : 25;
            } else if (route.name === "Tech") {
              iconName = "laptop";
              size = focused ? 30 : 25;
            } else if (route.name === "Sport") {
              iconName = "soccer";
              size = focused ? 30 : 25;
            } else if (route.name === "Health") {
              iconName = "run";
              size = focused ? 30 : 25;
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="World" component={SettingsNavigator} />
        <Tab.Screen name="Business" component={Business} />
        <Tab.Screen name="Tech" component={Tech} />
        <Tab.Screen name="Sport" component={Sport} />
        <Tab.Screen name="Health" component={Health} />
      </Tab.Navigator>
    );
  }
};

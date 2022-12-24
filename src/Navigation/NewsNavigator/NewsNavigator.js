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
import { color } from "react-native-reanimated";

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
       

        })}

        shifting
      >
        <Tab.Screen name="World" component={SettingsNavigator} options={{tabBarColor:"#0000FF"}}/>
        <Tab.Screen name="Business" component={Business} options={{tabBarColor:"#964B00"}}/>
        <Tab.Screen name="Tech" component={Tech} options={{tabBarColor:"#ff0"}}/>
        <Tab.Screen name="Sport" component={Sport} options={{tabBarColor:"#FFA500"}}/>
        <Tab.Screen name="Health" component={Health} options={{tabBarColor:"#00FF00"}}/>
      </Tab.Navigator>
    );
  }
};

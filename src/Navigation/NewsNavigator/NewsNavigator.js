import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { World } from "../../Features/News/Screen/World";
import { Health } from "../../Features/News/Screen/Health";
import { Sport } from "../../Features/News/Screen/Sport";
import { Business } from "../../Features/News/Screen/Business";
import { Tech } from "../../Features/News/Screen/Tech";


const Tab = createMaterialBottomTabNavigator();

export const NewsNavigator = () => {
 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
            size = focused ? 30 : 25;
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            size = focused ? 30 : 25;
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="World" component={World} />
      <Tab.Screen name="Business" component={Business} />
      <Tab.Screen name="Tech" component={Tech} />
      <Tab.Screen name="Sport" component={Sport} />
      <Tab.Screen name="Health" component={Health} />
    </Tab.Navigator>
  );
};

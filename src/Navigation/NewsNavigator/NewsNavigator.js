import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export const NewsNavigator = () => {
  const AllScreen = () => {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  };

  const SportScreen = () => {
    return (
      <View>
        <Text>Sport Screen</Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
            size = focused ? 25 : 30;
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            size = focused ? 25 : 30;
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
      <Tab.Screen name="Home" component={AllScreen} />
      <Tab.Screen name="Settings" component={SportScreen} />
    </Tab.Navigator>
  );
};

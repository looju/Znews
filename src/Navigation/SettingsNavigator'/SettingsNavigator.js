import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { World } from "../../Features/News/Screen/World";
import { Settings } from "../../Features/News/Screen/Settings";

const Drawer = createDrawerNavigator();

export const SettingsNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="World"
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "WorldNews") {
            iconName = "earth";
            size = focused ? 30 : 25;
          } else if (route.name === "Settings") {
            iconName = "cog-outline";
            size = focused ? 30 : 25;
          }
          return <MaterialCommunityIcons name={iconName} size={size} />;
        },
        drawerActiveTintColor: "tomato",
        drawerInactiveTintColor: "gray",
      })}
    >
      <Drawer.Screen name="WorldNews" component={World} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

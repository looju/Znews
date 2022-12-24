import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { World } from "../../Features/News/Screen/World";
import { Settings } from "../../Features/News/Screen/Settings";
import { ThemeContext } from "../../Services/Theme";

const Drawer = createDrawerNavigator();

export const SettingsNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      initialRouteName="World"
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, size,color }) => {
          let iconName;

          if (route.name === "WorldNews") {
            iconName = "earth";
            size = focused ? 30 : 25;
            color=theme=="light"?"#000":"#fff"
          } else if (route.name === "Settings") {
            iconName = "cog-outline";
            size = focused ? 30 : 25;
            color=theme=="light"?"#000":"#fff"
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
        },
        drawerStyle: {
          backgroundColor: theme == "light" ? "#fff" : "#000",
        },
        headerStyle: {
          backgroundColor: theme == "light" ? "#fff" : "#000",
        },
        headerTitleAlign: "center",
        headerTintColor: theme == "light" ? "#000" : "#fff",
        headerTitle: {
          color: theme == "light" ? "#000" : "#fff",
        },
        drawerActiveTintColor: "tomato",
        drawerInactiveTintColor: "gray",
      })}
    >
      <Drawer.Screen
        name="WorldNews"
        component={World}
        options={{
          headerTitle: {
            color: theme == "light" ? "#000" : "#fff",
          },
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

import React, { useContext, useState } from "react";
import { View, StyleSheet, Vibration, Switch, Text } from "react-native";
import { ThemeContext } from "../../../Services/Theme";

export const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={theme=="light"?styles.container:styles.containerDark}>
      <View style={styles.themeContainer}>
        <Text style={styles.text}>Switch theme</Text>
        <Switch
          trackColor={{ false: "#fff", true: "#000" }}
          thumbColor={isEnabled ? "#FFF" : "#000"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          onChange={handleThemeChange}
          onPointerMove={() => Vibration.vibrate(1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  containerDark: {
    flex: 1,
    backgroundColor:"#000"
  },
  themeContainer: {
    backgroundColor: "#808080",
    width: 400,
    height: 100,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Tangerine_400Regular",
    color: "#fff",
  },
});

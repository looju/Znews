import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";

export const Setup = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("NewsNavigator");
    }, 6000);
  }, []);

  setTimeout(changeState, 3000);

  function changeState() {
    setLoading(!loading);
  }

  const LoadingResource = () => {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../../../assets/paris.jpg")}
        resizeMode="cover"
      >
        <View style={styles.lottieView}>
          <LottieView
            source={require("../../../../assets/world.json")}
            autoPlay
            loop
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Loading resources</Text>
        </View>
      </ImageBackground>
    );
  };

  const SettingResource = () => {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../../../assets/paris.jpg")}
        resizeMode="cover"
      >
        <View style={styles.lottieView}>
          <LottieView
            source={require("../../../../assets/gears.json")}
            autoPlay
            loop
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}> Setting up</Text>
        </View>
      </ImageBackground>
    );
  };

  return loading ? <LoadingResource /> : <SettingResource />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  lottieView: {
    height: 150,
    width: 150,
  },
  textView: {
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontFamily: "Tangerine_400Regular",
    color: "#fff",
  },
});

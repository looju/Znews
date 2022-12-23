import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export const Setup = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("NewsNavigator");
    }, 70000000000000);
  }, []);

  setTimeout(changeState, 3000);

  function changeState() {
    setLoading(!loading);
  }

  const LoadingResource = () => {
    return (
      <View style={styles.container}>
        <View style={styles.lottieView}>
          <LottieView
            source={require("../../../../assets/star.json")}
            autoPlay
            loop
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Loading resources</Text>
        </View>
      </View>
    );
  };

  const SettingResource = () => {
    return (
      <View style={styles.container}>
        <View style={styles.lottieView}>
          <LottieView
            source={require("../../../../assets/football.json")}
            autoPlay
            loop
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}> Setting up</Text>
        </View>
      </View>
    );
  };

  return loading ? <LoadingResource /> : <SettingResource/>;
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
    fontSize:25,
    fontFamily:"Tangerine_400Regular"
  },
});

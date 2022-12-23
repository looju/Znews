import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";

export const Carousel = ({ navigation }) => {
  const slides = [
    {
      key: "one",
      title: "Insigthful global updates",
      text: "Stay in touch with the latest happenings around the world",
      image: require("../../../../assets/world.jpg"),
   
    },
    {
      key: "two",
      title: "Disruptive innovations",
      text: "Find out the latest trends in technology",
      image: require("../../../../assets/tech.jpg"),
  
    },
    {
      key: "three",
      title: "Real time sport updates",
      text: "Latest happenings in the world of sports",
      image: require("../../../../assets/messi.jpg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ImageBackground style={[styles.container]} source={item.image}>
        <View style={styles.title}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}>
            {item.text}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => navigation.navigate("Setup")}
      onSkip={() => navigation.navigate("Setup")}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      showSkipButton
    />
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  title: {
    marginTop: 50,
    width: 300,
    heigth: 100,
  },
  text: {
    width: 400,
    maxHeight: 200,
    top:500
  },
  image: {
    flex: 1,
    left: 20,
    marginTop: 200,
  },
});

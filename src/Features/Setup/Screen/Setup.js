import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import { List } from "react-native-paper";

export const Setup = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace("NewsNavigator");
  //   }, 3500);
  // }, []);

  // setTimeout(changeState, 1500);

  // function changeState() {
  //   setLoading(!loading);
  // }

  // const LoadingResource = () => {
  //   return (
  //     <ImageBackground
  //       style={styles.container}
  //       source={require("../../../../assets/paris.jpg")}
  //       resizeMode="cover"
  //     >
  //       <View style={styles.lottieView}>
  //         <LottieView
  //           source={require("../../../../assets/world.json")}
  //           autoPlay
  //           loop
  //         />
  //       </View>
  //       <View style={styles.textView}>
  //         <Text style={styles.text}>Loading resources</Text>
  //       </View>
  //     </ImageBackground>
  //   );
  // };

  const SettingResource = () => {
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
          <Text style={styles.text}> Select country</Text>
        </View>
        <List.Section
          style={{
            backgroundColor: "#fff",
            width: 300,
            maxHeight: 300,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: 300,
              maxHeight: 300,
            }}
          >
            <ScrollView style={{ height: 350, backgroundColor: "none" }}>
              <List.Accordion
                title="All countries"
                left={(props) => <List.Icon {...props} icon="earth" />}
                expanded={expanded}
                onPress={handlePress}
              >
                <List.Item
                  title="Arab Emirates"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"ae"})
                  }
                />
                <List.Item
                  title="Belgium"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"be"})
                  } 
                />
                <List.Item
                  title="Bulgaria"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"bg"})
                  }
                />
                <List.Item
                  title="Canada"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"ca"})
                  }
                />
                <List.Item
                  title="China"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"cn"})
                  }
                />
                <List.Item
                  title="Colombia"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"co"})
                  }
                />
                <List.Item
                  title="Egypt"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"eg"})
                  }
                />
                <List.Item
                  title="France"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )}
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"fr"})
                  }
                />
                <List.Item
                  title="Greece"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                   
                  )} 
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"gr"})
                  }
                />
                <List.Item
                  title="Japan"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )} 
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"jp"})
                  }
                />
                <List.Item
                  title="Nigeria"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )} 
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"ng"})
                  }
                />
                <List.Item
                  title="Portugal"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )} 
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"pt"})
                  }
                />
                <List.Item
                  title="United Kingdom"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )} 
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"gb"})
                  }
                />
                <List.Item
                  title="United States"
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="earth-arrow-right"
                      color="#ff0"
                    />
                  )} 
                  onPress={() =>
                    navigation.navigate("NewsNavigator", {country:"us"})
                  }
                />
              </List.Accordion>
            </ScrollView>
          </View>
        </List.Section>
      </ImageBackground>
    );
  };

  return <SettingResource />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 45,
    fontWeight: "600",
    fontFamily: "Tangerine_400Regular",
    color: "#fff",
  },
});

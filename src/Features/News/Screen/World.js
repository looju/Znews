import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { Services } from "../../../Services/Services";

export const World = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    Services("general")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.log("Erro fetching general data at World.js: " + error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={{ uri: item.urlToImage }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{item.description}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateStyle}>
          {moment(item.publishedAt).format("LLLL")}
        </Text>
      </View>
      <View style={styles.detailView}>
        <Text style={styles.detailStyle}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={()=>{
        Linking.openURL(`${item.url}`)
      }}>
        <View style={styles.buttonLink}>
          <Text style={styles.dateStyle}>Read more </Text>
          <MaterialCommunityIcons name="newspaper" size={20}/>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.publishedAt}
        refreshing
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    marginVertical: 8,
    width: 400,
    height: 300,
  },
  imageStyle: {
    width: 400,
    height: 300,
  },
  textView: {
    marginTop: 5,
  },
  dateView: {
    marginTop: 2,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "Lato_400Regular",
    fontWeight: "bold",
  },
  detailView: {
    marginVertical: 10,
  },
  detailStyle: {
    fontSize: 20,
    fontFamily: "Griffy_400Regular",
  },
  readMoreView: {
    marginTop: 2,
  },
  buttonLink: {
   flexDirection:"row",
    marginBottom: 10,
  },
});

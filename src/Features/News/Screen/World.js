import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import ContentLoader, { Rect } from "react-content-loader/native";
import { FadeInView } from "../../Animation/Animation";
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
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`${item.url}`);
        }}
      >
        <View style={styles.buttonLink}>
          <Text style={styles.dateStyle}>Read more </Text>
          <MaterialCommunityIcons name="newspaper" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1}}>
      {newsData.length > 1 ? (
        <View style={styles.container}>
          <FadeInView duration={2500}>
            <FlatList
              data={newsData}
              renderItem={renderItem}
              keyExtractor={(item) => item.publishedAt}
              refreshing
            ></FlatList>
          </FadeInView>
        </View>
      ) : (
        <ContentLoader
          speed={2}
          width={500}
          height={500}
          viewBox="0 0 500 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#e8ceda"
        >
          <Rect x="14" y="176" rx="2" ry="2" width="368" height="42" />
          <Rect x="12" y="4" rx="2" ry="2" width="493" height="165" />
          <Rect x="16" y="239" rx="2" ry="2" width="478" height="166" />
          <Rect x="13" y="462" rx="2" ry="2" width="477" height="113" />
          <Rect x="15" y="414" rx="2" ry="2" width="360" height="42" />
          <Rect x="18" y="428" rx="2" ry="2" width="129" height="5" />
        </ContentLoader>
      )}
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
    flexDirection: "row",
    marginBottom: 10,
  },
});

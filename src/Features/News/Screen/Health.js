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

export const Health = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    Services("health")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.log("Erro fetching general data at Health.js: " + error);
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
          width={400}
          height={500}
          viewBox="0 0 400 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#e8ceda"
        >
          <Rect x="11" y="183" rx="2" ry="2" width="354" height="19" />
          <Rect x="12" y="205" rx="2" ry="2" width="129" height="6" />
          <Rect x="99" y="11" rx="2" ry="2" width="249" height="165" />
          <Rect x="100" y="236" rx="2" ry="2" width="244" height="161" />
          <Rect x="16" y="403" rx="2" ry="2" width="356" height="19" />
          <Rect x="102" y="467" rx="2" ry="2" width="245" height="113" />
          <Rect x="15" y="439" rx="2" ry="2" width="360" height="16" />
          <Rect x="18" y="428" rx="2" ry="2" width="129" height="5" />
          <Rect x="13" y="214" rx="2" ry="2" width="360" height="16" />
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

import React, { useState, useEffect, useContext } from "react";
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
import { ThemeContext } from "../../../Services/Theme";

export const Business = ({country}) => {
  const [newsData, setNewsData] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Services("business",`${country}`)
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.log("Erro fetching general data at Business.js: " + error);
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
        <Text style={theme=="light"?styles.textStyle:styles.textStyleDark}>{item.description}</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={theme=="light"?styles.dateStyle:styles.dateStyleDark}>
          {moment(item.publishedAt).format("LLLL")}
        </Text>
      </View>
      <View style={styles.detailView}>
        <Text style={theme=="light"?styles.detailStyle:styles.detailStyleDark}>{item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`${item.url}`);
        }}
      >
        <View style={styles.buttonLink}>
          <Text style={theme=="light"?styles.dateStyle:styles.dateStyleDark}>Read more </Text>
          <MaterialCommunityIcons name="newspaper" size={20} color={theme=="light"?"#000":"#fff"}/>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {newsData.length > 1 ? (
        <View style={theme=="light"?styles.container:styles.containerDark}>
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
  containerDark:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#000"
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
  dateStyle:{
    color:'#000'
  },
  dateStyleDark:{
    color:'#fff'
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "Lato_400Regular",
    fontWeight: "bold",
  },
  textStyleDark:{
    fontSize: 20,
    fontFamily: "Lato_400Regular",
    fontWeight: "bold",
    color:"white"
  },
  detailView: {
    marginVertical: 10,
  },
  detailStyle: {
    fontSize: 20,
    fontFamily: "Griffy_400Regular",
  },
  detailStyleDark:{
    fontSize: 20,
    fontFamily: "Griffy_400Regular",
    color:"#fff"
  },
  readMoreView: {
    marginTop: 2,
  },
  buttonLink: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

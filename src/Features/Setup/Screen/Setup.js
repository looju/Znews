import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export const Setup = ({navigation}) => {
  const [loading, setLoading] = useState(true);

useEffect(()=>{
setTimeout(()=>{
navigation.replace("NewsNavigator")
})
},[])


setTimeout(changeState, 3000);


  function changeState(){
    setLoading(!loading);
  };

  const LoadingResource = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  };

  return loading ? <LoadingResource /> : null;
};

const styles = StyleSheet.create({});

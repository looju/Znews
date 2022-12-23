import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const NewsNavigator = () => {
 const AllScreen=()=>{
    return(
        <View>
            <Text>
                Home Screen
            </Text>
        </View>
    )
 }

 const SportScreen=()=>{
    return(
        <View>
            <Text>
                Sport Screen
            </Text>
        </View>
    )
 }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AllScreen} />
      <Tab.Screen name="Settings" component={SportScreen} />
    </Tab.Navigator>
  );
};

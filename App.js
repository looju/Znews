import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator} from '@react-navigation/stack';
import { NewsNavigator } from './src/Navigation/NewsNavigator/NewsNavigator';
import { Carousel } from './src/Features/Carousel/Screen/Carousel';
import { Setup } from './src/Features/Setup/Screen/Setup';


const Stack = createStackNavigator();
export default function App() {
  return (
 <Stack.Navigator>
  <Stack.Screen name="Carousel" component={Carousel}/>
  <Stack.Screen name="Setup" component={Setup}/>
  <Stack.Screen name="NewsNavigator" component={NewsNavigator}/>
 </Stack.Navigator>
  );
}



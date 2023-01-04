import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './views/screens/HomeScreen';
import CarGalleryScreen from './views/screens/CarGalleryScreen';
import CarlistScreen from './views/screens/CarlistScreen';
// import CarDetailScreen from './views/screens/CarDetailScreen';
// import ImageScreen from './views/screens/ImageScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CarlistScreen" component={CarlistScreen} />
        <Stack.Screen name="CarGalleryScreen" component={CarGalleryScreen} />
        {/* <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
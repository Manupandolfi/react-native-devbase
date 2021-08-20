import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import { colors } from "react-native-elements";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={"light"} />
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

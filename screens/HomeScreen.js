import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text h1>Home Screen</Text>
      <Text h4 style={styles.description}>
        Description...
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  description: {
    color: "#afafaf",
    marginLeft: 5,
    marginBottom: 10,
  },
});

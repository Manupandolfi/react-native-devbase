import React from "react";
import { View } from "react-native";
import { LinearProgress, Text } from "react-native-elements";

const Loader = ({ label = "Loading..." }) => {
  return (
    <View>
      <Text>{label}</Text>
      <LinearProgress color="primary" />
    </View>
  );
};

export default Loader;

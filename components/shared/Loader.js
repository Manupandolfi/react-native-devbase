import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearProgress, Text } from "react-native-elements";

const Loader = ({ label = "Loading..." }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <LinearProgress style={styles.progress} color="primary" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  label: {
    textAlign: "center",
    fontSize: 18,
  },
  progress: {
    marginTop: 10,
  },
});

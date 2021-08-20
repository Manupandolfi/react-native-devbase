import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const UsersList = ({ users, navigate }) => {
  return (
    <View style={styles.buttons}>
      {users.map((username, key) => (
        <Button
          buttonStyle={styles.button}
          title={username}
          key={`${username}-${key}`}
          onPress={() => navigate(username)}
        >
          {username}
        </Button>
      ))}
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: 5,
  },
});

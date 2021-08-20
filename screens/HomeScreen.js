import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { getTop5Users } from "../api/githubApi";
import Loader from "../components/shared/Loader";
import UsersList from "../components/users/UserList";

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTop5Users().then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  const navigateUserDetails = (username) => {
    console.log("on navigate " + username);
    // navigation.navigate("User", { username });
  };

  return (
    <View style={styles.root}>
      <Text h1>Home Screen</Text>
      <Text h4 style={styles.description}>
        Description...
      </Text>
      {loading ? (
        <Loader label={"Fetching users..."} />
      ) : (
        <UsersList users={users} navigate={navigateUserDetails} />
      )}
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

import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, ListItem, Text } from "react-native-elements";
import { getUser } from "../api/githubApi";
import Loader from "../components/shared/Loader";
import { colors } from "react-native-elements";

const UserScreen = ({ route }) => {
  const { username } = route.params;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser(username)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        } else {
          setError("An error ocurred while obtaining user data");
        }
      })
      .catch((err) => {
        //TODO parse error
        console.log(err);
        setError("An error ocurred while obtaining user data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.root}>
      {loading ? (
        <Loader label="Fetching user..." />
      ) : (
        <React.Fragment>
          {user ? (
            <ListItem bottomDivider>
              <Avatar source={{ uri: user.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.location}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ) : (
            error && (
              <View style={styles.errorContainer}>
                <Text h5 style={styles.error}>
                  {error}
                </Text>
              </View>
            )
          )}
        </React.Fragment>
      )}
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  error: {
    color: colors.error,
  },
  errorContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});

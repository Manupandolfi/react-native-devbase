import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, ListItem, Text } from "react-native-elements";
import { getUser } from "../api/githubApi";
import Loader from "../components/shared/Loader";
import { colors } from "react-native-elements";
import messages from "../constants/lang";

const UserScreen = ({ route }) => {
  const { username } = route.params;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser(username)
      .then((res) => {
        res.status === 200
          ? setUser(res.data)
          : setError(messages.error.fetchUser);
      })
      .catch((err) => {
        //TODO parse error
        console.log(err);
        setError(messages.error.fetchUser);
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
  error: {
    color: colors.error,
  },
  errorContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});

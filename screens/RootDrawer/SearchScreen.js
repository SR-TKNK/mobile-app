import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <Button title="Search" onPress={() => alert("Searching...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;

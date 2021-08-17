import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Save your Setting" onPress={() => alert("Saving...")} />
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

export default SettingsScreen;

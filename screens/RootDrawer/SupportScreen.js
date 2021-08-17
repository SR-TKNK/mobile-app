import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function SupportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button title="Connect" onPress={() => alert("Connecting...")} />
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

export default SupportScreen;

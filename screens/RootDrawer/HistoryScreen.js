import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function HistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
      <Text>This is your History</Text>
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

export default HistoryScreen;

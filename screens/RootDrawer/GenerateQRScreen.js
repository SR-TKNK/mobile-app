import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

function GenerateQRScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Generate QR Screen</Text>
      <Image source={require("../../assets/18125113.png")} />
      <Button title="Generate new QR" onPress={() => alert("Generating...")} />
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

export default GenerateQRScreen;

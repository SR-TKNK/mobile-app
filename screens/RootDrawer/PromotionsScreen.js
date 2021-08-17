import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function PromotionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Promotions Screen</Text>
      <Text>This is all of your Promotions</Text>
      <Button
        title="Find more Promotions"
        onPress={() => alert("Finding...")}
      />
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

export default PromotionsScreen;

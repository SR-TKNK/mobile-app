import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign up Screen</Text>
      <Button
        title="Click here"
        onPress={() => {
          alert("Sign up...");
        }}
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

export default SignUpScreen;

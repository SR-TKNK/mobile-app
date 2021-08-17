import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const RootStack = createNativeStackNavigator();

function RootStackScreen({ navigation }) {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="SignInScreen"
        component={SignInScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import AccountScreen from "../AccountScreens/AccountScreen";
import Header from '../../components/Header';

const AccountStack = createNativeStackNavigator();

export default function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
};
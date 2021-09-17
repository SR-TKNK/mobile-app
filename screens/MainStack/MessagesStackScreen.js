import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import MessagesScreen from "../MessageScreens/MessagesScreen";
import Header from '../../components/Header';

const MessagesStack = createNativeStackNavigator();

export default function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        options={{ header: () => <Header name="Thông báo" /> }}
        name="Messages"
        component={MessagesScreen}
      />
    </MessagesStack.Navigator>
  );
};
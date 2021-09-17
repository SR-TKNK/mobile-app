import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import CartScreen from "../CartScreens/CartScreen";
import Header from '../../components/Header';

const CartStack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ header: () => <Header name="Giỏ hàng" /> }}
      />
    </CartStack.Navigator>
  );
};
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import CartScreen from "../CartScreens/CartScreen";
import Payment from '../CartScreens/Payment';
import FromInfor from '../CartScreens/FromInfo';
import Header from '../../components/Header';
import QrCode from '../CartScreens/QrCode';

const CartStack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ header: () => <Header name="Giỏ hàng" /> }}
      />
      <CartStack.Screen
        name="Payment"
        component={Payment}
        options={({ route }) => ({
          title: "Thanh toán",
          headerStyle: {
            backgroundColor: '#ff9999',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        })}
      />
      <CartStack.Screen
        name="FromInfor"
        component={FromInfor}
        options={{
          title: "Thanh toán",
          headerStyle: {
            backgroundColor: '#ff9999',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      />
      <CartStack.Screen
        name="QrCode"
        component={QrCode}
        options={{
          title: "Thanh toán",
          headerStyle: {
            backgroundColor: '#ff9999',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      />
    </CartStack.Navigator>
  );
};
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import OrderScreen from "../OrderScreens/OrderScreen";
import OrderDetails from "../OrderScreens/OrderDetails";
import Header from '../../components/Header';

const OrderStack = createNativeStackNavigator();

export default function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Order"
        component={OrderScreen}
        options={{ header: () => <Header name="Đơn hàng" /> }}
      />
      <OrderStack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          title: 'Thông tin đơn hàng',
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
    </OrderStack.Navigator>
  );
}
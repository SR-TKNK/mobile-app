import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersViews from "../../components/Orders/OrdersView"

function AllOrder() {
  return (
    <OrdersViews filter="all" />
  );
}

function PendingOrders() {
  return (
    <OrdersViews filter="Chờ giao hàng" />
  );
}

function DeliveringOrder() {
  return (
    <OrdersViews filter="Đang giao" />
  );
}

function DoneOrders() {
  return (
    <OrdersViews filter="Đã giao hàng" />
  );
}

function CanceledOrders() {
  return (
    <OrdersViews filter="Đơn đã hủy" />
  );
}

const Tab = createMaterialTopTabNavigator();

export default function OrderScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true
      }}
      screenOptions={{
        tabBarItemStyle: { width: 160 },
        tabBarStyle: { backgroundColor: '#99ccff' },
      }}
    >
      <Tab.Screen name="Tất cả đơn" component={AllOrder} />
      <Tab.Screen name="Chờ giao hàng" component={PendingOrders} />
      <Tab.Screen name="Đang giao " component={DeliveringOrder} />
      <Tab.Screen name="Đã giao hàng" component={DoneOrders} />
      <Tab.Screen name="Đơn đã hủy" component={CanceledOrders} />
    </Tab.Navigator>
  );
}

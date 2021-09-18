import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import OrderStackScreen from "../MainStack/OrderStackScreen";
import HomeStackScreen from "../MainStack/HomeStackScreen";
import CartStackScreen from "../MainStack/CartStackScreen";
import MessagesStackScreen from "../MainStack/MessagesStackScreen";
import AccountStackScreen from "../MainStack/AccountStackScreen";

const Tab = createMaterialBottomTabNavigator();

const currentLocation = "http://192.168.1.103:3000/api";

const MainTabScreen = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  function getTotal(cart) {
    let sum = 0;
    for (const i in cart) {
      sum += cart[i].quantity;
    }
    setTotal(sum);
  };

  function fetchData() {
    axios.get(`${currentLocation}/cart`)
      .then(res => {
        const cart = res.data;
        setCart(cart);
        getTotal(cart);
      })
      .catch(error => console.log(error));
  }

  React.useEffect(() => {
    fetchData();
  }, [cart]);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      barStyle={{ backgroundColor: "#ff9999" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStackScreen}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarBadge: total,
          tabBarLabel: "Giỏ hàng",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStackScreen}
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        options={{
          tabBarLabel: "Đơn hàng",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

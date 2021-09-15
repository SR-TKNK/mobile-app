import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import MessagesScreen from "./MessagesScreen";
import CartScreen from "./CartScreen";
import AccountScreen from "./AccountScreen";
import OrderScreen from "./OrderScreen";
import Header from "../../components/Header";

const HomeStack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <Header name="Trang chủ" /> }}
      />
    </HomeStack.Navigator>
  );
};

const CartStackScreen = ({ navigation }) => {
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

const AccountStackScreen = ({ navigation }) => {
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

const OrderStackScreen = ({ navigation }) => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Order"
        component={OrderScreen}
        options={{ header: () => <Header name="Đơn hàng" /> }}
      />
    </OrderStack.Navigator>
  );
};

const MessagesStackScreen = ({ navigation }) => {
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
  }, [total]);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      barStyle={{ backgroundColor: "pink" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarColor: "#ff9999",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MessagesStackScreen}
        options={{
          tabBarLabel: "Thông báo",
          tabBarColor: "#ffcc99",
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
          tabBarColor: "#99ff99",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStackScreen}
        options={{
          tabBarLabel: "Đơn hàng",
          tabBarColor: "#99ccff",
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
          tabBarColor: "#9999ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

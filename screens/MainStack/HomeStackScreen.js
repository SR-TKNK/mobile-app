import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import HomeScreen from "../HomeScreens/HomeScreen";
import CategoryScreen from "../HomeScreens/Category";
import ProductDetails from "../HomeScreens/ProductDetails";
import SearchingProducts from "../HomeScreens/SearchingProducts";
import Header from '../../components/Header';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <Header name="Trang chủ" /> }}
      />
      <HomeStack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route }) => ({
          title: route.params.name,
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
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ route }) => ({
          title: route.params.name,
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
      {/* <HomeStack.Screen
        name="SearchingProducts"
        component={SearchingProducts}
        options={{ header: () => <Header name="Trang chủ" /> }}
      /> */}
    </HomeStack.Navigator>
  );
};
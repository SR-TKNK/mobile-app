import * as React from "react";
import { View, ActivityIndicator, Alert } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import MainTabScreen from "./screens/RootDrawer/MainTabScreen";
import HistoryScreen from "./screens/RootDrawer/HistoryScreen";
import GenerateQRScreen from "./screens/RootDrawer/GenerateQRScreen";
import SearchScreen from "./screens/RootDrawer/SearchScreen";
import PromotionsScreen from "./screens/RootDrawer/PromotionsScreen";
import SettingsScreen from "./screens/RootDrawer/SettingsScreen";
import SupportScreen from "./screens/RootDrawer/SupportScreen";

import RootStackScreen from "./screens/RootStack/RootStackScreen";

import { DrawerContent } from "./screens/DrawerContent";

import { AuthContext } from "./components/context";

const Drawer = createDrawerNavigator();

function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (username, password) => {
        const url = "http://10.0.2.2:8080/auth/login";
        // const url = "https://server-user-srtknk-cxnam-ews.education.wise-paas.com/auth/login";
        axios
          .post(url, {
            email: username,
            password: password,
          })
          .then(async (res) => {
            const data = res.data;
            if (data["token"]) {
              try {
                await AsyncStorage.setItem("userToken", data["token"]);
              } catch (e) {
                Alert.alert(
                  "Invalid User!",
                  "Your Username or Password is incorrect!"
                );
              }
              dispatch({ type: "LOGIN", id: username, token: data["token"] });
            }
          })
          .catch((e) => {
            Alert.alert(
              "Invalid User!",
              "Your Username or Password is incorrect!"
            );
          });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="MainTab" component={MainTabScreen} />
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="GenerateQR" component={GenerateQRScreen} />
            <Drawer.Screen name="History" component={HistoryScreen} />
            <Drawer.Screen name="Promotions" component={PromotionsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
